import root from "./root";

describe("root", () => {
  test("should find the root of a number", () => {
    expect(root(1, 1)).toBe(1);
    expect(root(4, 2)).toBe(2);
    expect(root(27, 3)).toBe(3);
    expect(root(10, 2)).toBeCloseTo(Math.pow(10, 1 / 2));
    expect(root(10, 3)).toBeCloseTo(Math.pow(10, 1 / 3));
    expect(root(10, 4)).toBeCloseTo(Math.pow(10, 1 / 4));
  });
});
