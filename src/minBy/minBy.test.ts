import minBy from "./minBy";

describe("minBy", () => {
  it("returns the minimum value for a valid numeric key", () => {
    const data = [{ a: 5 }, { a: 2 }, { a: 9 }];
    expect(minBy(data, "a")).toBe(2);
  });

  it("returns Infinity for an empty array", () => {
    expect(minBy([], "a")).toBe(Infinity);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 5 }, { a: "x" }, { a: 1 }];
    expect(minBy(data, "a")).toBe(1);
  });

  it("returns Infinity if all values are invalid", () => {
    const data = [{ a: null }, { a: "x" }, { a: undefined }];
    expect(minBy(data, "a")).toBe(Infinity);
  });

  it("handles missing keys safely", () => {
    const data = [{ a: 3 }, {}, { a: 2 }];
    expect(minBy(data, "a")).toBe(2);
  });

  it("handles negative numbers", () => {
    const data = [{ a: -5 }, { a: -2 }, { a: 0 }];
    expect(minBy(data, "a")).toBe(-5);
  });
});
