import sum from "./sum";

describe("sum module", () => {
  test("sum of [1, 2, 3, 4] to equal 10", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
  test("sum of [-1, 2, -3, 4] to equal 2", () => {
    expect(sum([-1, 2, -3, 4])).toBe(2);
  });
  test("sum of [-1, -2, -3, -4] to equal -10", () => {
    expect(sum([-1, -2, -3, -4])).toBe(-10);
  });
});
