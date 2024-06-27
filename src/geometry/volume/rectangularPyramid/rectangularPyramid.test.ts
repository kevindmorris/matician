import rectangularPyramid from "./rectangularPyramid";

describe("rectangularPyramid", () => {
  test("should find the volume of a rectangular pyramid", () => {
    expect(rectangularPyramid(1, 1, 2)).toBeCloseTo(0.66667, 4);
    expect(rectangularPyramid(2, 1, 2)).toBeCloseTo(1.33333, 4);
    expect(rectangularPyramid(3, 2, 1)).toBeCloseTo(2, 4);
  });
});
