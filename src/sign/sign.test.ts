import sign from "./sign";

describe("sign", () => {
  it("returns 1 for positive numbers", () => {
    expect(sign(5)).toBe(1);
    expect(sign(0.001)).toBe(1);
  });

  it("returns -1 for negative numbers", () => {
    expect(sign(-5)).toBe(-1);
    expect(sign(-0.001)).toBe(-1);
  });

  it("returns 0 for zero", () => {
    expect(sign(0)).toBe(0);
  });

  it("handles -0 as 0", () => {
    expect(sign(-0)).toBe(0);
  });
});
