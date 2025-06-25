import floor from "./floor";

describe("floor", () => {
  it("rounds down positive decimals", () => {
    expect(floor(3.9)).toBe(3);
    expect(floor(0.99)).toBe(0);
  });

  it("rounds down negative decimals away from zero", () => {
    expect(floor(-2.1)).toBe(-3);
    expect(floor(-0.5)).toBe(-1);
  });

  it("returns same value if already an integer", () => {
    expect(floor(4)).toBe(4);
    expect(floor(-6)).toBe(-6);
  });
});
