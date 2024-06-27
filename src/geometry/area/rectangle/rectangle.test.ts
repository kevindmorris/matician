import rectangle from "./rectangle";

describe("rectangle", () => {
  test("should find the area of a rectangle", () => {
    expect(rectangle(1, 2)).toBeCloseTo(2, 4);
    expect(rectangle(2, 3)).toBeCloseTo(6, 4);
    expect(rectangle(3, 4)).toBeCloseTo(12, 4);
    expect(rectangle(4, 5)).toBeCloseTo(20, 4);
  });
});
