import percentage from "./percentage";

describe("percentage", () => {
  it("calculates correct percentage for valid inputs", () => {
    expect(percentage(25, 100)).toBe(25);
    expect(percentage(50, 200)).toBe(25);
    expect(percentage(0, 100)).toBe(0);
    expect(percentage(30, 30)).toBe(100);
  });

  it("returns correct result for decimal values", () => {
    expect(percentage(2.5, 10)).toBe(25);
    expect(percentage(1, 4)).toBe(25);
  });

  it("handles negative values", () => {
    expect(percentage(-20, 100)).toBe(-20);
    expect(percentage(20, -100)).toBe(-20);
  });

  it("throws an error if whole is 0", () => {
    expect(() => percentage(5, 0)).toThrow("Division by zero");
  });
});
