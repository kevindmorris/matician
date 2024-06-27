import ellipse from "./ellipse";

describe("ellipse", () => {
  test("should find the area of an ellipse", () => {
    expect(ellipse(1, 2)).toBeCloseTo(6.28319, 4);
    expect(ellipse(1, 3)).toBeCloseTo(9.42478, 4);
    expect(ellipse(2, 3)).toBeCloseTo(18.84956, 4);
    expect(ellipse(2, 4)).toBeCloseTo(25.13274, 4);
  });
});
