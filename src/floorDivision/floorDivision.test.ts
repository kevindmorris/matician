import floorDivision from "./floorDivision";

describe("floorDivision", () => {
  it("performs floor division on positive numbers", () => {
    expect(floorDivision(7, 3)).toBe(2);
    expect(floorDivision(10, 2)).toBe(5);
  });

  it("handles division with negative dividend", () => {
    expect(floorDivision(-7, 3)).toBe(-3);
  });

  it("handles division with negative divisor", () => {
    expect(floorDivision(7, -3)).toBe(-3);
  });

  it("handles division with both negative dividend and divisor", () => {
    expect(floorDivision(-7, -3)).toBe(2);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => floorDivision(5, 0)).toThrow("Division by zero");
  });

  it("returns 0 when 0 is the dividend", () => {
    expect(floorDivision(0, 5)).toBe(0);
  });
});
