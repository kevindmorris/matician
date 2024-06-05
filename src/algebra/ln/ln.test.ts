import ln from "./ln";

describe("ln", () => {
  test("should be undefined", () => {
    expect(ln(-1)).toBeUndefined();
    expect(ln(0)).toBeUndefined();
  });
  test("should find the natural logaritm of a number", () => {
    expect(ln(0.5)).toBeCloseTo(-0.6931471805599453, 8);
    expect(ln(1)).toBeCloseTo(0, 8);
    expect(ln(1.5)).toBeCloseTo(0.4054651081081644, 8);
    expect(ln(2)).toBeCloseTo(0.6931471805599453, 8);
    expect(ln(10)).toBeCloseTo(2.302585092994046, 8);
  });
});
