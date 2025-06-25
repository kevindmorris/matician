import exponentiate from "./exponentiate";

describe("exponentiate", () => {
  it("raises positive numbers to positive integer powers", () => {
    expect(exponentiate(2, 3)).toBe(8);
    expect(exponentiate(5, 2)).toBe(25);
  });

  it("returns 1 when the exponent is 0", () => {
    expect(exponentiate(10, 0)).toBe(1);
    expect(exponentiate(0, 0)).toBe(1); // by convention
  });

  it("handles negative exponents", () => {
    expect(exponentiate(2, -2)).toBe(0.25);
  });

  it("handles fractional exponents (roots)", () => {
    expect(exponentiate(9, 0.5)).toBe(3); // square root of 9
  });

  it("handles base 0 correctly", () => {
    expect(exponentiate(0, 5)).toBe(0);
  });

  it("returns Infinity or 0 as expected for large/special cases", () => {
    expect(exponentiate(2, 1024)).toBe(Infinity); // large number overflow
    expect(exponentiate(0, -1)).toBe(Infinity); // division by zero
  });
});
