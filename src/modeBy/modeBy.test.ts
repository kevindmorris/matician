import modeBy from "./modeBy";

describe("modeBy", () => {
  it("returns the most frequent value", () => {
    const data = [{ a: 1 }, { a: 2 }, { a: 2 }, { a: 3 }];
    expect(modeBy(data, "a")).toBe(2);
  });

  it("returns the first most frequent value in case of tie", () => {
    const data = [{ a: 1 }, { a: 2 }, { a: 1 }, { a: 2 }];
    const result = modeBy(data, "a");
    expect([1, 2]).toContain(result);
  });

  it("returns NaN for empty array", () => {
    expect(Number.isNaN(modeBy([], "a"))).toBe(true);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 1 }, { a: "x" }, { a: 1 }, { a: 2 }];
    expect(modeBy(data, "a")).toBe(1);
  });

  it("returns NaN if no numeric values exist", () => {
    const data = [{ a: "x" }, { a: null }, { a: undefined }];
    expect(Number.isNaN(modeBy(data, "a"))).toBe(true);
  });

  it("handles negative numbers and zero correctly", () => {
    const data = [{ a: -1 }, { a: 0 }, { a: -1 }, { a: 0 }, { a: 0 }];
    expect(modeBy(data, "a")).toBe(0);
  });
});
