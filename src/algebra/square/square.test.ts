import square from "./square";

describe("square", () => {
  test("should square a number", () => {
    expect(square(-5)).toBe(25);
    expect(square(-2)).toBe(4);
    expect(square(-1)).toBe(1);
    expect(square(0)).toBe(0);
    expect(square(1)).toBe(1);
    expect(square(2)).toBe(4);
    expect(square(5)).toBe(25);
    expect(square(Infinity)).toBe(Infinity);
    expect(square(-Infinity)).toBe(Infinity);
    expect(square(1.1)).toBeCloseTo(1.21);
    expect(square(5.333)).toBeCloseTo(28.440889);
  });
});
