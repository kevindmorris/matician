import multiply from "./multiply";

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("multiplies a positive and a negative number", () => {
    expect(multiply(-2, 5)).toBe(-10);
  });

  it("multiplies two negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it("returns 0 when either number is 0", () => {
    expect(multiply(0, 100)).toBe(0);
    expect(multiply(100, 0)).toBe(0);
  });

  it("handles decimal multiplication", () => {
    expect(multiply(2.5, 4)).toBe(10);
    expect(multiply(1.2, 3.4)).toBeCloseTo(4.08);
  });
});
