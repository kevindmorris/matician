import max from "./max";

describe("max", () => {
  test("should find the max", () => {
    expect(max([])).toBeNaN();
    expect(max([4, 3, 2, 1])).toBe(4);
    expect(max([-1, -2, -3, 4])).toBe(4);
  });
});
