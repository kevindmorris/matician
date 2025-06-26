import medianBy from "./medianBy";

describe("medianBy", () => {
  it("returns the median of sorted numeric values", () => {
    const data = [{ a: 1 }, { a: 3 }, { a: 2 }];
    expect(medianBy(data, "a")).toBe(2);
  });

  it("returns the average of two middle values for even length", () => {
    const data = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
    expect(medianBy(data, "a")).toBe(2.5);
  });

  it("returns NaN for an empty array", () => {
    expect(Number.isNaN(medianBy([], "a"))).toBe(true);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 1 }, { a: "x" }, { a: 3 }];
    expect(medianBy(data, "a")).toBe(2);
  });

  it("returns NaN if no numeric values exist", () => {
    const data = [{ a: "x" }, { a: null }, { a: undefined }];
    expect(Number.isNaN(medianBy(data, "a"))).toBe(true);
  });

  it("handles negative numbers correctly", () => {
    const data = [{ a: -10 }, { a: -5 }, { a: 0 }];
    expect(medianBy(data, "a")).toBe(-5);
  });

  it("handles missing keys safely", () => {
    const data = [{ a: 3 }, {}, { a: 1 }];
    expect(medianBy(data, "a")).toBe(2);
  });
});
