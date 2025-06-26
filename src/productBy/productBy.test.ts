import productBy from "./productBy";

describe("productBy", () => {
  it("returns the product of numeric values", () => {
    const data = [{ a: 2 }, { a: 3 }, { a: 4 }];
    expect(productBy(data, "a")).toBe(24);
  });

  it("returns 1 for an empty array", () => {
    expect(productBy([], "a")).toBe(1);
  });

  it("ignores non-numeric values", () => {
    const data = [{ a: 2 }, { a: "x" }, { a: 4 }];
    expect(productBy(data, "a")).toBe(8);
  });

  it("returns 1 if no valid numbers exist", () => {
    const data = [{ a: "foo" }, { a: null }, { a: undefined }];
    expect(productBy(data, "a")).toBe(1);
  });

  it("handles negative numbers correctly", () => {
    const data = [{ a: -2 }, { a: 3 }];
    expect(productBy(data, "a")).toBe(-6);
  });

  it("handles missing keys safely", () => {
    const data = [{ a: 2 }, {}, { a: 5 }];
    expect(productBy(data, "a")).toBe(10);
  });

  it("returns 0 if any valid value is zero", () => {
    const data = [{ a: 5 }, { a: 0 }, { a: 2 }];
    expect(productBy(data, "a")).toBe(0);
  });
});
