import isEven from "./isEven";

describe("isEven", () => {
  it("returns true for even numbers", () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  it("returns false for odd numbers", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });
});
