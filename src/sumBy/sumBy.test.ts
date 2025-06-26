import sumBy from "./sumBy";

describe("sumBy", () => {
  it("sums numbers for a valid key", () => {
    const data = [{ a: 1 }, { a: 2 }, { a: 3 }];
    expect(sumBy(data, "a")).toBe(6);
  });

  it("returns 0 if the array is empty", () => {
    expect(sumBy([], "a")).toBe(0);
  });

  it("ignores non-number values", () => {
    const data = [{ a: 1 }, { a: "x" }, { a: 3 }];
    expect(sumBy(data, "a")).toBe(4);
  });

  it("returns 0 if the key does not exist in any object", () => {
    const data = [{ a: 1 }, { a: 2 }];
    expect(sumBy(data, "b" as any)).toBe(0);
  });

  it("handles mixed presence of keys", () => {
    const data = [{ a: 1 }, {}, { a: 4 }];
    expect(sumBy(data, "a")).toBe(5);
  });

  it("handles undefined or null values safely", () => {
    const data = [{ a: 1 }, { a: undefined }, { a: null }];
    expect(sumBy(data, "a")).toBe(1);
  });

  it("returns 0 if all values are non-numeric", () => {
    const data = [{ a: "foo" }, { a: true }, { a: [] }];
    expect(sumBy(data, "a")).toBe(0);
  });
});
