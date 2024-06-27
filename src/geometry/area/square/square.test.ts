import square from "./square";

describe("square", () => {
  test("should find the area of a square", () => {
    expect(square(1)).toBeCloseTo(1, 4);
    expect(square(2)).toBeCloseTo(4, 4);
    expect(square(3)).toBeCloseTo(9, 4);
    expect(square(4)).toBeCloseTo(16, 4);
  });
});
