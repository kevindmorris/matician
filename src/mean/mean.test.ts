import mean from "./mean";

describe("mean module", () => {
  test("mean of [] to be undefined", () => {
    expect(mean([])).toBeNaN();
  });
  test("mean of [1, 2, 3] to equal 2", () => {
    expect(mean([1, 2, 3])).toBe(2);
  });
  test("mean of [5, 1, 4, 2, 3] to equal 3", () => {
    expect(mean([5, 1, 4, 2, 3])).toBe(3);
  });
  test("mean of [1, -1, 2, -2] to equal 0", () => {
    expect(mean([1, -1, 2, -2])).toBe(0);
  });
});
