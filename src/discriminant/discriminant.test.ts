import discriminant from "./discriminant";

describe("discriminant", () => {
  it("returns positive value for two real roots", () => {
    expect(discriminant(1, 0, -4)).toBe(16);
  });

  it("returns zero for one real root", () => {
    expect(discriminant(1, 2, 1)).toBe(0);
  });

  it("returns negative value for two complex roots", () => {
    expect(discriminant(1, 0, 4)).toBe(-16);
  });

  it("handles negative coefficients correctly", () => {
    expect(discriminant(-2, 3, -1)).toBe(1);
  });

  it("handles zero coefficients", () => {
    expect(discriminant(0, 5, 3)).toBe(25); // linear case (b^2)
  });
});
