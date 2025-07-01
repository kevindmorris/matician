import { Circle } from './Circle';

describe('Circle', () => {
  it('creates a valid circle', () => {
    const c = new Circle(5);
    expect(c.radius).toBe(5);
  });

  it('throws on non-positive radius', () => {
    expect(() => new Circle(0)).toThrow();
    expect(() => new Circle(-1)).toThrow();
  });

  it('computes diameter correctly', () => {
    const c = new Circle(3);
    expect(c.diameter).toBe(6);
  });

  it('computes circumference correctly', () => {
    const c = new Circle(2);
    expect(c.circumference).toBeCloseTo(2 * Math.PI * 2);
  });

  it('computes area correctly', () => {
    const c = new Circle(4);
    expect(c.area).toBeCloseTo(Math.PI * 16);
  });

  it('scales the radius', () => {
    const c = new Circle(2);
    c.scale(3);
    expect(c.radius).toBe(6);
  });

  it('throws on invalid scale factor', () => {
    const c = new Circle(5);
    expect(() => c.scale(0)).toThrow();
  });

  it('creates from diameter', () => {
    const c = Circle.fromDiameter(10);
    expect(c.radius).toBe(5);
  });

  it('throws on invalid diameter', () => {
    expect(() => Circle.fromDiameter(0)).toThrow();
  });
});
