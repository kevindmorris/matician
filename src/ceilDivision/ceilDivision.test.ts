import ceilDivision from "./ceilDivision";

describe("ceilDivision", () => {
  it("returns ceiling of positive division", () => {
    expect(ceilDivision(7, 3)).toBe(3);
  });

  it("returns ceiling of negative dividend", () => {
    expect(ceilDivision(-7, 3)).toBe(-2);
  });

  it("returns ceiling of negative divisor", () => {
    expect(ceilDivision(7, -3)).toBe(-2);
  });

  it("returns ceiling of both negative", () => {
    expect(ceilDivision(-7, -3)).toBe(3);
  });

  it("throws when dividing by zero", () => {
    expect(() => ceilDivision(5, 0)).toThrow("Division by zero");
  });

  it("returns 0 when 0 is dividend", () => {
    expect(ceilDivision(0, 5)).toBe(0);
  });
});
