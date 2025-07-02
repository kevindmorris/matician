import SquarePyramid from './SquarePyramid';

describe('SquarePyramid', () => {
  it('returns correct dimensions', () => {
    const p = new SquarePyramid(4, 6);
    expect(p.baseLength).toBe(4);
    expect(p.height).toBe(6);
  });

  it('calculates slant height correctly', () => {
    const p = new SquarePyramid(4, 3);
    const expected = Math.sqrt(3 ** 2 + 2 ** 2); // b/2 = 2
    expect(p.slantHeight).toBeCloseTo(expected, 6);
  });

  it('calculates surface area correctly', () => {
    const p = new SquarePyramid(2, 3);
    const l = p.slantHeight;
    const expected = 4 + 4 * l;
    expect(p.surfaceArea).toBeCloseTo(expected, 5);
  });

  it('calculates volume correctly', () => {
    const p = new SquarePyramid(2, 3);
    expect(p.volume).toBeCloseTo((1 / 3) * 4 * 3, 5);
  });

  it('throws error for invalid dimensions', () => {
    expect(() => new SquarePyramid(0, 5)).toThrow();
    expect(() => new SquarePyramid(4, 0)).toThrow();
    expect(() => new SquarePyramid(-2, 3)).toThrow();
  });
});
