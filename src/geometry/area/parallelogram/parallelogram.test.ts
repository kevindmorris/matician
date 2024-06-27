import parallelogram from "./parallelogram";

describe("parallelogram", () => {
  test("should find the area of a parallelogram", () => {
    expect(parallelogram(1, 2)).toBeCloseTo(2, 4);
    expect(parallelogram(2, 3)).toBeCloseTo(6, 4);
    expect(parallelogram(3, 4)).toBeCloseTo(12, 4);
    expect(parallelogram(4, 5)).toBeCloseTo(20, 4);
  });
});
