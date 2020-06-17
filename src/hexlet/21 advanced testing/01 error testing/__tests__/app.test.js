import functionWithException from '../app';

test('boom!', () => {
  expect(() => {
    functionWithException(0);
  }).toThrow();
});
test('Error msg!', () => {
  expect(() => {
    functionWithException(0);
  }).toThrow('Unknown state!');
});
