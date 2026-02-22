const { add, subtract } = require('./calculator');

describe('Calculator Tests', () => {

  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('handles negative numbers', () => {
    expect(add(-2, 3)).toBe(1);
  });
});