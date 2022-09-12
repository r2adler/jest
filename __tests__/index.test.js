import { reverse, gt } from '../src/index.js';

// NODE_OPTIONS=--experimental-vm-modules npx jest

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('')).toEqual('');
});

test ('gt', () => {
    expect(gt(3, 1)).toBe(true);
    expect(gt(1, 1)).toBe(false);
    expect(gt(1, 3)).toBe(false);
})