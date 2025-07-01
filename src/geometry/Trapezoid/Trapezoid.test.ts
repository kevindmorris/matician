import { Trapezoid } from './Trapezoid';

describe('Trapezoid', () => {
  it('creates a valid trapezoid', () => {
    const t = new Trapezoid(6, 4, 3, 3, 5);
    expect(t.area).toBe(0.5 * (6 + 4) * 5);
    expect(t.perimeter).toBe(6 + 4 + 3 + 3);
  });

  it('throws on non-positive values', () => {
    expect(() => new Trapezoid(0, 4, 3, 3, 5)).toThrow();
    expect(() => new Trapezoid(6, 4, -1, 3, 5)).toThrow();
  });

  it('scales all dimensions correctly', () => {
    const t = new Trapezoid(2, 3, 4, 5, 6);
    t.scale(2);
    expect(t.base1).toBe(4);
    expect(t.base2).toBe(6);
    expect(t.side1).toBe(8);
    expect(t.side2).toBe(10);
    expect(t.height).toBe(12);
    expect(t.area).toBe(0.5 * (4 + 6) * 12);
    expect(t.perimeter).toBe(4 + 6 + 8 + 10);
  });

  it('throws on invalid scale factor', () => {
    const t = new Trapezoid(3, 4, 5, 6, 7);
    expect(() => t.scale(0)).toThrow();
  });
});
