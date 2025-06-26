import varianceBy from "./varianceBy";

describe("varianceBy", () => {
  it("calculates sample variance correctly", () => {
    const data = [
      { a: 2 },
      { a: 4 },
      { a: 4 },
      { a: 4 },
      { a: 5 },
      { a: 5 },
      { a: 7 },
      { a: 9 }
    ];
    expect(varianceBy(data, "a")).toBeCloseTo(4.571428571428571, 5);
  });

  it("returns NaN for arrays with fewer than 2 numbers", () => {
    expect(Number.isNaN(varianceBy([{ a: 1 }], "a"))).toBe(true);
    expect(Number.isNaN(varianceBy([], "a"))).toBe(true);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 2 }, { a: "x" }, { a: 4 }];
    expect(varianceBy(data, "a")).toBeCloseTo(2, 5);
  });

  it("returns NaN if no valid numbers exist", () => {
    const data = [{ a: "foo" }, { a: null }];
    expect(Number.isNaN(varianceBy(data, "a"))).toBe(true);
  });

  it("handles missing keys safely", () => {
    const data = [{ a: 1 }, {}, { a: 3 }];
    expect(varianceBy(data, "a")).toBeCloseTo(2, 5);
  });

  it("handles negative numbers correctly", () => {
    const data = [{ a: -1 }, { a: -3 }, { a: -5 }];
    expect(varianceBy(data, "a")).toBeCloseTo(4, 5);
  });
});
