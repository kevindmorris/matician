import circle from "./circle";

describe("circle", () => {
  test("should find the area of a circle", () => {
    expect(circle(1)).toBeCloseTo(3.14159, 4);
    expect(circle(2)).toBeCloseTo(12.56637, 4);
    expect(circle(3)).toBeCloseTo(28.27433, 4);
  });
});
