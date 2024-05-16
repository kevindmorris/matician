import sum from "./sum";

describe("sum module", () => {
  test("sum of [1,2,3] to equal 6", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  test("sum of [1,-2,3] to equal 2", () => {
    expect(sum([1, -2, 3])).toBe(2);
  });
});
