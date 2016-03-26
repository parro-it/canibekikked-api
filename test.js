import test from 'tape-async';
import canibekiked from './canibekiked';
import EventEmitter from 'events';

test('API object is a function', t => {
  t.equal(typeof canibekiked, 'function');
});

test('Return a promise to an EventEmitter instance', t => {
  const results = canibekiked('pkhzzrd');
  t.ok(results instanceof EventEmitter);
});

test('Emit a `package-checking` event for every author package', async (t) => {
  t.plan(1);
  const results = canibekiked('pkhzzrd');
  results.on('package-checking', ({ name }) => {
    t.equal(name, 'statsd');
  });
  await results.start();
});
