import reverse from '../src/index.js';
// NODE_OPTIONS=--experimental-vm-modules npx jest

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});