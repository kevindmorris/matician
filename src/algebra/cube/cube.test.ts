import cube from "./cube";

describe("cube", () => {
  test("should cube a number", () => {
    expect(cube(-5)).toBe(-125);
    expect(cube(-2)).toBe(-8);
    expect(cube(-1)).toBe(-1);
    expect(cube(0)).toBe(0);
    expect(cube(1)).toBe(1);
    expect(cube(2)).toBe(8);
    expect(cube(5)).toBe(125);
    expect(cube(Infinity)).toBe(Infinity);
    expect(cube(-Infinity)).toBe(-Infinity);
    expect(cube(1.1)).toBeCloseTo(1.331);
    expect(cube(5.333)).toBeCloseTo(151.675261037);
  });
});
