import modulo from "./modulo";

describe("modulo", () => {
  it("returns correct remainder for positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  it("returns correct remainder when dividend is negative", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  it("returns correct remainder when divisor is negative", () => {
    expect(modulo(10, -3)).toBe(1); // JS behavior: sign of dividend
  });

  it("returns 0 when divisible evenly", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  it("throws an error when divisor is 0", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero");
  });
});
