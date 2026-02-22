const { add, subtract } = require('./calculator');

    test('handles negative numbers in add', () => {
      expect(add(-2, 3)).toBe(1);
    });

    test('handles negative numbers in subtract', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('handles zero values', () => {
      expect(add(0, 5)).toBe(5);