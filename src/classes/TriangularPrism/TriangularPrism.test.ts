import TriangularPrism from './TriangularPrism';

describe('TriangularPrism', () => {
  it('returns correct dimensions', () => {
    const p = new TriangularPrism(4, 10);
    expect(p.baseSide).toBe(4);
    expect(p.height).toBe(10);
  });

  it('calculates base area correctly', () => {
    const p = new TriangularPrism(2, 5);
    const expected = (Math.sqrt(3) / 4) * 2 ** 2;
    expect(p.baseArea).toBeCloseTo(expected, 6);
  });

  it('calculates lateral surface area correctly', () => {
    const p = new TriangularPrism(3, 7);
    expect(p.lateralSurfaceArea).toBeCloseTo(3 * 3 * 7, 5);
  });

  it('calculates surface area correctly', () => {
    const p = new TriangularPrism(2, 5);
    const baseArea = (Math.sqrt(3) / 4) * 2 ** 2;
    const lateral = 3 * 2 * 5;
    const expected = 2 * baseArea + lateral;
    expect(p.surfaceArea).toBeCloseTo(expected, 6);
  });

  it('calculates volume correctly', () => {
    const p = new TriangularPrism(2, 5);
    const baseArea = (Math.sqrt(3) / 4) * 4;
    const expected = baseArea * 5;
    expect(p.volume).toBeCloseTo(expected, 6);
  });

  it('throws error for invalid inputs', () => {
    expect(() => new TriangularPrism(0, 1)).toThrow();
    expect(() => new TriangularPrism(1, 0)).toThrow();
    expect(() => new TriangularPrism(-3, 4)).toThrow();
  });
});
