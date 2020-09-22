// std
import { strictEqual } from 'assert';

// FoalTS
import { Config, Context, isHttpResponseInternalServerError } from '../../core';
import { renderError } from './render-error.util';

describe('renderError', () => {

  let ctx: Context;
  let error: Error;

  beforeEach(() => {
    ctx = new Context({});
    error = new Error('Error used in renderError');
  });

  function testErrorObject() {
    it(
      'should return an HttpResponseInternalServerError object with the proper "ctx" and "error" properties.',
      async () => {
        const response = await renderError(error, ctx);

        if (!isHttpResponseInternalServerError(response)) {
          throw new Error('The function should have returned an HttpResponseInternalServerError object.');
        }

        strictEqual(response.ctx, ctx);
        strictEqual(response.error, error);
      }
    );
  }

  context('given the configuration settings.debug is false or not defined', () => {

    testErrorObject();

    it('should return a response with the proper body.', async () => {
      const default500page = '<html><head><title>INTERNAL SERVER ERROR</title></head><body>'
      + '<h1>500 - INTERNAL SERVER ERROR</h1></body></html>';

      const response = await renderError(error, ctx);
      strictEqual(response.body, default500page);
    });

  });

  context('given the configuration settings.debug is true', () => {

    beforeEach(() => Config.set('settings.debug', true));

    afterEach(() => Config.remove('settings.debug'));

    testErrorObject();

    it('should return a response with the proper body.', async () => {
      const response = await renderError(error, ctx);

      const text: string = response.body;
      strictEqual(text.includes(`Error: ${error.message}`), true, '"Error: This is an error" not found');
      strictEqual(text.includes('at Context.'), true, '"at Context." not found');
      strictEqual(
        text.includes(
          'You are seeing this error because you have settings.debug set to true in your configuration file.'
        ),
        true,
        '"You are seeing this error because" not found.'
      );
    });

  });

});
