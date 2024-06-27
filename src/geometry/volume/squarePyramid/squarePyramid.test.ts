import squarePyramid from "./squarePyramid";

describe("squarePyramid", () => {
  test("should find the squarePyramid of a square pyramid", () => {
    expect(squarePyramid(1, 1)).toBeCloseTo(0.33333, 4);
    expect(squarePyramid(2, 1)).toBeCloseTo(1.33333, 4);
    expect(squarePyramid(3, 2)).toBeCloseTo(6, 4);
  });
});
