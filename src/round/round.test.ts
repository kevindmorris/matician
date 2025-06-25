import round from "./round";

describe("round", () => {
  it("rounds up when decimal is 0.5 or more", () => {
    expect(round(3.5)).toBe(4);
    expect(round(2.6)).toBe(3);
  });

  it("rounds down when decimal is less than 0.5", () => {
    expect(round(3.4)).toBe(3);
    expect(round(2.49)).toBe(2);
  });

  it("handles negative values correctly", () => {
    expect(round(-2.5)).toBe(-2);
    expect(round(-2.51)).toBe(-3);
  });

  it("returns same value if already an integer", () => {
    expect(round(7)).toBe(7);
  });
});
