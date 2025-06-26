import meanBy from "./meanBy";

describe("meanBy", () => {
  it("calculates mean for numeric values", () => {
    const data = [{ a: 2 }, { a: 4 }, { a: 6 }];
    expect(meanBy(data, "a")).toBe(4);
  });

  it("returns 0 for an empty array", () => {
    expect(meanBy([], "a")).toBe(0);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 2 }, { a: "x" }, { a: 6 }];
    expect(meanBy(data, "a")).toBe(4);
  });

  it("returns 0 if no valid numbers exist", () => {
    const data = [{ a: "foo" }, { a: null }, { a: true }];
    expect(meanBy(data, "a")).toBe(0);
  });

  it("handles missing keys", () => {
    const data = [{ a: 3 }, {}, { a: 6 }];
    expect(meanBy(data, "a")).toBe(4.5);
  });

  it("handles undefined and null values safely", () => {
    const data = [{ a: 5 }, { a: undefined }, { a: null }];
    expect(meanBy(data, "a")).toBe(5);
  });
});
