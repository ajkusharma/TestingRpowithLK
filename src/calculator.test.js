  test('handles negative numbers in add', () => {
      expect(add(-2, 3)).toBe(1);
    });

    test('handles negative numbers in subtract', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('handles zero values', () => {
      expect(add(0, 5)).toBe(5);
      expect(subtract(5, 0)).toBe(5);
    });