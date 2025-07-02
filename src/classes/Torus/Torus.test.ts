import Torus from './Torus';

describe('Torus', () => {
  it('returns correct radii', () => {
    const t = new Torus(5, 2);
    expect(t.majorRadius).toBe(5);
    expect(t.minorRadius).toBe(2);
  });

  it('calculates surface area correctly', () => {
    const t = new Torus(5, 2);
    const expected = 4 * Math.PI ** 2 * 5 * 2;
    expect(t.surfaceArea).toBeCloseTo(expected, 5);
  });

  it('calculates volume correctly', () => {
    const t = new Torus(5, 2);
    const expected = 2 * Math.PI ** 2 * 5 * 4;
    expect(t.volume).toBeCloseTo(expected, 5);
  });

  it('throws error for invalid radii', () => {
    expect(() => new Torus(0, 2)).toThrow();
    expect(() => new Torus(3, 0)).toThrow();
    expect(() => new Torus(3, 3)).toThrow();
    expect(() => new Torus(2, 3)).toThrow();
  });
});
