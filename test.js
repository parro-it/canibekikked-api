const test = require('tape');
const canibekikedApi = require('./');

test('it work!', t => {
  const result = canibekikedApi();
  t.equal(result, 42);
  t.end();
});
