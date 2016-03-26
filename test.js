import test from 'tape-async';
import canibekiked from './canibekiked';

test('API object is a function', t => {
  t.equal(typeof canibekiked, 'function');
});
