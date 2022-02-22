// std
import { deepStrictEqual, strictEqual } from 'assert';

// FoalTS
import { FileList } from '../../common/file';
import { Context } from './context';

describe('Context', () => {

  it('should instantiate with suitable properties.', () => {
    const request = {};
    const actual = new Context(request);

    strictEqual(actual.request, request);
    deepStrictEqual(actual.state, {});
    strictEqual(actual.user, undefined);
    strictEqual(actual.session, undefined);
    strictEqual(actual.files instanceof FileList, true);
  });

});
