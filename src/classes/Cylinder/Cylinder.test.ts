import Cylinder from './Cylinder';

describe('Cylinder', () => {
  it('returns correct dimensions', () => {
    const c = new Cylinder(3, 5);
    expect(c.radius).toBe(3);
    expect(c.height).toBe(5);
  });

  it('calculates surface area correctly', () => {
    const c = new Cylinder(2, 4);
    const expected = 2 * Math.PI * 2 * (2 + 4);
    expect(c.surfaceArea).toBeCloseTo(expected, 5);
  });

  it('calculates volume correctly', () => {
    const c = new Cylinder(2, 4);
    const expected = Math.PI * 2 * 2 * 4;
    expect(c.volume).toBeCloseTo(expected, 5);
  });

  it('throws error for non-positive radius or height', () => {
    expect(() => new Cylinder(0, 5)).toThrow();
    expect(() => new Cylinder(5, -1)).toThrow();
  });
});
