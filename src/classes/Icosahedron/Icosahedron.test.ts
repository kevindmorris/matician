import Icosahedron from './Icosahedron';

describe('Icosahedron', () => {
  it('returns correct edge length', () => {
    const i = new Icosahedron(2);
    expect(i.edge).toBe(2);
  });

  it('calculates surface area correctly', () => {
    const a = 3;
    const expected = 5 * Math.sqrt(3) * a ** 2;
    const i = new Icosahedron(a);
    expect(i.surfaceArea).toBeCloseTo(expected, 5);
  });

  it('calculates volume correctly', () => {
    const a = 3;
    const expected = (5 * (3 + Math.sqrt(5)) / 12) * a ** 3;
    const i = new Icosahedron(a);
    expect(i.volume).toBeCloseTo(expected, 5);
  });

  it('throws error for non-positive edge length', () => {
    expect(() => new Icosahedron(0)).toThrow();
    expect(() => new Icosahedron(-1)).toThrow();
  });
});
