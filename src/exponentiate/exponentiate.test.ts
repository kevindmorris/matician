import pow from "./pow";

describe("pow", () => {
  it("raises positive numbers to positive integer powers", () => {
    expect(pow(2, 3)).toBe(8);
    expect(pow(5, 2)).toBe(25);
  });

  it("returns 1 when the exponent is 0", () => {
    expect(pow(10, 0)).toBe(1);
    expect(pow(0, 0)).toBe(1); // by convention
  });

  it("handles negative exponents", () => {
    expect(pow(2, -2)).toBe(0.25);
  });

  it("handles fractional exponents (roots)", () => {
    expect(pow(9, 0.5)).toBe(3); // square root of 9
  });

  it("handles base 0 correctly", () => {
    expect(pow(0, 5)).toBe(0);
  });

  it("returns Infinity or 0 as expected for large/special cases", () => {
    expect(pow(2, 1024)).toBe(Infinity); // large number overflow
    expect(pow(0, -1)).toBe(Infinity); // division by zero
  });
});
