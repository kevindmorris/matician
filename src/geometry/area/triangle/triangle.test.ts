import triangle from "./triangle";

describe("triangle", () => {
  test("should find the area of a triangle", () => {
    expect(triangle(1, 1)).toBeCloseTo(0.5, 4);
    expect(triangle(1, 2)).toBeCloseTo(1, 4);
    expect(triangle(1, 3)).toBeCloseTo(1.5, 4);
    expect(triangle(2, 3)).toBeCloseTo(3, 4);
  });
});
