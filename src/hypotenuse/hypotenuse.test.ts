import hypotenuse from "./hypotenuse";

describe("hypotenuse", () => {
  it("computes correct hypotenuse for 3-4-5 triangle", () => {
    expect(hypotenuse(3, 4)).toBeCloseTo(5);
  });

  it("computes correct hypotenuse for 5-12-13 triangle", () => {
    expect(hypotenuse(5, 12)).toBeCloseTo(13);
  });

  it("handles zero input correctly", () => {
    expect(hypotenuse(0, 5)).toBeCloseTo(5);
    expect(hypotenuse(7, 0)).toBeCloseTo(7);
  });

  it("returns 0 when both inputs are 0", () => {
    expect(hypotenuse(0, 0)).toBe(0);
  });

  it("handles floating-point legs", () => {
    expect(hypotenuse(1.5, 2.5)).toBeCloseTo(Math.sqrt(1.5 ** 2 + 2.5 ** 2));
  });
});
