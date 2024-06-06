import min from "./min";

describe("min", () => {
  test("should find the min", () => {
    expect(min([])).toBeNaN();
    expect(min([4, 3, 2, 1])).toBe(1);
    expect(min([-1, -2, -3, 4])).toBe(-3);
  });
});
