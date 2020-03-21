import assert from 'assert';
import getFunction from '../functions.js';

const get = getFunction();

assert(get({ key: 'value' }, 'key') === 'value');
assert(get({}, 'key', 'default') === 'default');
// assert(get({}, 'key') === 'default'); // false

assert.equal(get({ key: 'value' }, 'key'), 'value');
assert.equal(get({}, 'key', 'default'), 'default');

// assert.equal({}, {});
// assert.equal({ key: 'value' }, { key: 'value' });

assert.deepEqual({}, {});
assert.deepEqual({ key: 'value' }, { key: 'value' });
