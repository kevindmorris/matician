import variance from "./variance";

describe("variance module", () => {
  test("should find the variance of an array", () => {
    expect(variance([])).toBe(0);
    expect(variance([1, 2, 3])).toBe(1);
    expect(variance([1, 2, 3, 4, 5])).toBe(2.5);
    expect(variance([-1, -1, 2, 2])).toBe(3);
  });
});
