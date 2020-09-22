import { IAppController } from '../app.controller.interface';
import { HookPostFunction } from '../hooks';
import { Context, HttpResponse, isHttpResponse } from '../http';
import { ServiceManager } from '../service-manager';
import { convertErrorToResponse } from './convert-error-to-response';
import { Route } from './route.interface';

export async function getResponse(
  route: Route, ctx: Context, services: ServiceManager, appController: IAppController
): Promise<HttpResponse> {
  let response: undefined | HttpResponse;

  const hookPostFunctions: HookPostFunction[] = [];

  for (const hook of route.hooks) {
    let result: HttpResponse | HookPostFunction | void;
    try {
      result = await hook(ctx, services);
    } catch (error) {
      result = await convertErrorToResponse(error, ctx, appController);
    }
    if (isHttpResponse(result)) {
      response = result;
      break;
    } else if (typeof result === 'function') {
      hookPostFunctions.unshift(result);
    }
  }

  if (!isHttpResponse(response)) {
    try {
      response = await route.controller[route.propertyKey](ctx, ctx.request.params, ctx.request.body);
    } catch (error) {
      response = await convertErrorToResponse(error, ctx, appController);
    }
  }

  if (!isHttpResponse(response)) {
    const error = new Error(`The controller method "${route.propertyKey}" should return an HttpResponse.`);
    response = await convertErrorToResponse(error, ctx, appController);
  }

  for (const postFn of hookPostFunctions) {
    try {
      await postFn(response);
    } catch (error) {
      response = await convertErrorToResponse(error, ctx, appController);
    }
  }

  return response;
}
