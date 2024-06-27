import pyramid from "./pyramid";

describe("pyramid", () => {
  test("should find the volume of a pyramid", () => {
    expect(pyramid(1, 1)).toBeCloseTo(0.33333, 4);
    expect(pyramid(2, 1)).toBeCloseTo(0.66667, 4);
    expect(pyramid(3, 2)).toBeCloseTo(2, 4);
  });
});
