import sphere from "./sphere";

describe("sphere", () => {
  test("should find the volume of a sphere", () => {
    expect(sphere(1)).toBeCloseTo(4.18879, 4);
    expect(sphere(2)).toBeCloseTo(33.51032, 4);
    expect(sphere(3)).toBeCloseTo(113.09734, 4);
  });
});
