import sqrt from "./sqrt";

describe("sqrt", () => {
  it("returns correct square root for positive numbers", () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(16)).toBe(4);
    expect(sqrt(0.25)).toBe(0.5);
  });

  it("returns 0 for input 0", () => {
    expect(sqrt(0)).toBe(0);
  });

  it("throws for negative numbers", () => {
    expect(() => sqrt(-1)).toThrow(
      "Square root of negative number is not defined"
    );
    expect(() => sqrt(-25)).toThrow();
  });
});
