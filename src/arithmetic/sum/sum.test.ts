import sum from "./sum";

describe("sum", () => {
  test("should sum an array", () => {
    expect(sum([])).toBe(0);
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([-1, 2, -3, 4])).toBe(2);
    expect(sum([-1, -2, -3, -4])).toBe(-10);
  });
});
