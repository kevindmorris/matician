import pythagorean from "./pythagorean";

describe("pythagorean", () => {
  test("should find the hypotenuse", () => {
    expect(pythagorean(3, 4)).toBeCloseTo(5, 6);
  });
});
