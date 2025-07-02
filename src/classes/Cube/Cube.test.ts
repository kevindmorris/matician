import Cube from './Cube';

describe('Cube', () => {
  it('correctly returns side length', () => {
    const cube = new Cube(3);
    expect(cube.side).toBe(3);
  });

  it('calculates surface area correctly', () => {
    const cube = new Cube(2);
    expect(cube.surfaceArea).toBe(24);
  });

  it('calculates volume correctly', () => {
    const cube = new Cube(2);
    expect(cube.volume).toBe(8);
  });

  it('throws error for non-positive side', () => {
    expect(() => new Cube(0)).toThrow("Side length must be positive.");
    expect(() => new Cube(-5)).toThrow("Side length must be positive.");
  });
});
