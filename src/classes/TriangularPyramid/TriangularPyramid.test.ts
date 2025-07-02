import TriangularPyramid from './TriangularPyramid';

describe('TriangularPyramid', () => {
  it('returns correct dimensions', () => {
    const p = new TriangularPyramid(4, 5);
    expect(p.baseSide).toBe(4);
    expect(p.height).toBe(5);
  });

  it('calculates base area correctly', () => {
    const p = new TriangularPyramid(2, 5);
    const expected = (Math.sqrt(3) / 4) * 4;
    expect(p.baseArea).toBeCloseTo(expected, 6);
  });

  it('calculates volume correctly', () => {
    const p = new TriangularPyramid(2, 5);
    const baseArea = (Math.sqrt(3) / 4) * 4;
    const expected = (1 / 3) * baseArea * 5;
    expect(p.volume).toBeCloseTo(expected, 6);
  });

  it('throws error for invalid dimensions', () => {
    expect(() => new TriangularPyramid(0, 2)).toThrow();
    expect(() => new TriangularPyramid(2, 0)).toThrow();
    expect(() => new TriangularPyramid(-3, 4)).toThrow();
  });
});
