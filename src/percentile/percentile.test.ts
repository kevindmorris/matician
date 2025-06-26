import percentile from "./percentile";

describe("percentile", () => {
  it("throws on empty array", () => {
    expect(() => percentile([], 50)).toThrow(
      "Cannot compute percentile of an empty array."
    );
  });

  it("throws on invalid percentile values", () => {
    expect(() => percentile([1, 2, 3], -5)).toThrow(
      "Percentile must be between 0 and 100."
    );
    expect(() => percentile([1, 2, 3], 105)).toThrow(
      "Percentile must be between 0 and 100."
    );
  });

  it("returns the correct value for exact percentile positions", () => {
    const data = [10, 20, 30, 40, 50];
    expect(percentile(data, 0)).toBe(10);
    expect(percentile(data, 25)).toBe(20);
    expect(percentile(data, 50)).toBe(30);
    expect(percentile(data, 100)).toBe(50);
  });

  it("interpolates correctly between values", () => {
    const data = [10, 20, 30];
    // 25th percentile falls between index 0 and 1
    // rank = 0.5 → 10 + 0.5*(20 - 10) = 15
    expect(percentile(data, 25)).toBe(15);
    // 75th percentile → rank = 1.5 → 20 + 0.5*(30 - 20) = 25
    expect(percentile(data, 75)).toBe(25);
  });

  it("works with unsorted input", () => {
    const data = [50, 10, 40, 20, 30];
    expect(percentile(data, 50)).toBe(30);
    expect(percentile(data, 0)).toBe(10);
    expect(percentile(data, 100)).toBe(50);
  });

  it("works with small arrays", () => {
    expect(percentile([42], 0)).toBe(42);
    expect(percentile([42], 100)).toBe(42);
    expect(percentile([10, 20], 50)).toBe(15);
  });
});
