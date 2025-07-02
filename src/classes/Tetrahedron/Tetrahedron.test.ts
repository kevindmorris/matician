import Tetrahedron from './Tetrahedron';

describe('Tetrahedron', () => {
  it('returns correct side length', () => {
    const t = new Tetrahedron(4);
    expect(t.side).toBe(4);
  });

  it('calculates surface area correctly', () => {
    const t = new Tetrahedron(2);
    const expected = Math.sqrt(3) * 4;
    expect(t.surfaceArea).toBeCloseTo(expected, 5);
  });

  it('calculates volume correctly', () => {
    const t = new Tetrahedron(2);
    const expected = (8) / (6 * Math.sqrt(2));
    expect(t.volume).toBeCloseTo(expected, 5);
  });

  it('throws error for non-positive side length', () => {
    expect(() => new Tetrahedron(0)).toThrow();
    expect(() => new Tetrahedron(-3)).toThrow();
  });
});
