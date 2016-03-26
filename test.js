import test from 'tape-async';
import canibekikked from './canibekikked';
import EventEmitter from 'events';

test('API object is a function', t => {
  t.equal(typeof canibekikked, 'function');
});

test('Return a promise to an EventEmitter instance', t => {
  const results = canibekikked('pkhzzrd');
  t.ok(results instanceof EventEmitter);
});

test('Emit a `package-checking` event for every author package', async (t) => {
  t.plan(1);
  const results = canibekikked('pkhzzrd');
  results.on('package-checking', ({ name }) => {
    t.equal(name, 'statsd');
  });
  await results.start();
});


