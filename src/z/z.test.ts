import z from "./z";

describe("z", () => {
  it("calculates a z-score correctly", () => {
    const data = [1, 2, 3, 4, 5];
    expect(z(3, data)).toBeCloseTo(0, 5); // mean-centered
    expect(z(5, data)).toBeGreaterThan(0);
    expect(z(1, data)).toBeLessThan(0);
  });

  it("throws on insufficient data", () => {
    expect(() => z(1, [1])).toThrow(
      "At least two values are required to compute z-score"
    );
  });

  it("throws when standard deviation is zero", () => {
    expect(() => z(1, [2, 2, 2])).toThrow(
      "Standard deviation is zero, cannot compute z-score"
    );
  });
});
