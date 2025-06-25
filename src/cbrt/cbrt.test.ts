import cbrt from "./cbrt";

describe("cbrt", () => {
  it("returns correct cube root for positive numbers", () => {
    expect(cbrt(8)).toBe(2);
    expect(cbrt(27)).toBe(3);
    expect(cbrt(0.125)).toBe(0.5);
  });

  it("returns correct cube root for negative numbers", () => {
    expect(cbrt(-8)).toBe(-2);
    expect(cbrt(-27)).toBe(-3);
  });

  it("returns 0 for input 0", () => {
    expect(cbrt(0)).toBe(0);
  });
});
