import maxBy from "./maxBy";

describe("maxBy", () => {
  it("returns the maximum value for a valid numeric key", () => {
    const data = [{ a: 5 }, { a: 2 }, { a: 9 }];
    expect(maxBy(data, "a")).toBe(9);
  });

  it("returns -Infinity for an empty array", () => {
    expect(maxBy([], "a")).toBe(-Infinity);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 5 }, { a: "x" }, { a: 10 }];
    expect(maxBy(data, "a")).toBe(10);
  });

  it("returns -Infinity if all values are invalid", () => {
    const data = [{ a: null }, { a: "x" }, { a: undefined }];
    expect(maxBy(data, "a")).toBe(-Infinity);
  });

  it("handles missing keys safely", () => {
    const data = [{ a: 3 }, {}, { a: 8 }];
    expect(maxBy(data, "a")).toBe(8);
  });

  it("handles negative numbers correctly", () => {
    const data = [{ a: -5 }, { a: -2 }, { a: 0 }];
    expect(maxBy(data, "a")).toBe(0);
  });
});
