import cone from "./cone";

describe("cone", () => {
  test("should find the volume of a cone", () => {
    expect(cone(1, 2)).toBeCloseTo(2.0944, 4);
    expect(cone(2, 1)).toBeCloseTo(4.18879, 4);
    expect(cone(2, 3)).toBeCloseTo(12.56637, 4);
  });
});
