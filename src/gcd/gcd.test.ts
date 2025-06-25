import gcd from "./gcd";

describe("gcd", () => {
  it("returns the GCD of two positive integers", () => {
    expect(gcd(48, 18)).toBe(6);
    expect(gcd(100, 25)).toBe(25);
  });

  it("returns 1 for coprime numbers", () => {
    expect(gcd(7, 1)).toBe(1);
    expect(gcd(17, 13)).toBe(1);
  });

  it("handles negative inputs", () => {
    expect(gcd(-48, 18)).toBe(6);
    expect(gcd(48, -18)).toBe(6);
    expect(gcd(-48, -18)).toBe(6);
  });

  it("returns the absolute value when one is 0", () => {
    expect(gcd(0, 7)).toBe(7);
    expect(gcd(9, 0)).toBe(9);
  });

  it("returns 0 when both are 0", () => {
    expect(gcd(0, 0)).toBe(0);
  });

  it("throws an error for non-integer input", () => {
    expect(() => gcd(5.5, 3)).toThrow("Both arguments must be integers");
  });
});
