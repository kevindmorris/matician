import randomInt from './randomInt';

describe('randomInt', () => {
  it('generates integers within range', () => {
    for (let i = 0; i < 100; i++) {
      const val = randomInt(1, 5);
      expect(val).toBeGreaterThanOrEqual(1);
      expect(val).toBeLessThanOrEqual(5);
      expect(Number.isInteger(val)).toBe(true);
    }
  });
});
