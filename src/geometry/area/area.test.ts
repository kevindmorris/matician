import area from "./area";

describe("area", () => {
  test("should find area of a circle", () => {
    expect(area.circle(1)).toBeCloseTo(3.14159, 4);
    expect(area.circle(2)).toBeCloseTo(12.56637, 4);
    expect(area.circle(3)).toBeCloseTo(28.27433, 4);
  });
  test("should find area of an ellipse", () => {
    expect(area.ellipse(1, 2)).toBeCloseTo(6.28319, 4);
    expect(area.ellipse(1, 3)).toBeCloseTo(9.42478, 4);
    expect(area.ellipse(2, 3)).toBeCloseTo(18.84956, 4);
    expect(area.ellipse(2, 4)).toBeCloseTo(25.13274, 4);
  });
  test("should find area of a triangle", () => {
    expect(area.triangle(1, 1)).toBeCloseTo(0.5, 4);
    expect(area.triangle(1, 2)).toBeCloseTo(1, 4);
    expect(area.triangle(1, 3)).toBeCloseTo(1.5, 4);
    expect(area.triangle(2, 3)).toBeCloseTo(3, 4);
  });
  test("should find area of a square", () => {
    expect(area.square(1)).toBeCloseTo(1, 4);
    expect(area.square(2)).toBeCloseTo(4, 4);
    expect(area.square(3)).toBeCloseTo(9, 4);
    expect(area.square(4)).toBeCloseTo(16, 4);
  });
  test("should find area of a rectangle", () => {
    expect(area.rectangle(1, 2)).toBeCloseTo(2, 4);
    expect(area.rectangle(2, 3)).toBeCloseTo(6, 4);
    expect(area.rectangle(3, 4)).toBeCloseTo(12, 4);
    expect(area.rectangle(4, 5)).toBeCloseTo(20, 4);
  });
  test("should find area of a parallelogram", () => {
    expect(area.parallelogram(1, 2)).toBeCloseTo(2, 4);
    expect(area.parallelogram(2, 3)).toBeCloseTo(6, 4);
    expect(area.parallelogram(3, 4)).toBeCloseTo(12, 4);
    expect(area.parallelogram(4, 5)).toBeCloseTo(20, 4);
  });
  test("should find area of a trapezoid", () => {
    expect(area.trapezoid(1, 2, 1)).toBeCloseTo(1.5, 4);
    expect(area.trapezoid(2, 3, 2)).toBeCloseTo(5, 4);
    expect(area.trapezoid(3, 4, 1)).toBeCloseTo(3.5, 4);
    expect(area.trapezoid(4, 5, 2)).toBeCloseTo(9, 4);
  });
});
