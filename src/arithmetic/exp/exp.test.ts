import exp from "./exp";

describe("exp module", () => {
  test("should raise e to the specied power", () => {
    expect(exp(-3)).toBeCloseTo(1 / Math.pow(Math.E, 3), 8);
    expect(exp(-2)).toBeCloseTo(1 / Math.pow(Math.E, 2), 8);
    expect(exp(-1)).toBeCloseTo(1 / Math.E, 8);
    expect(exp(0)).toBe(1);
    expect(exp(1)).toBeCloseTo(Math.E, 8);
    expect(exp(2)).toBeCloseTo(Math.pow(Math.E, 2), 8);
    expect(exp(3)).toBeCloseTo(Math.pow(Math.E, 3), 8);
  });
});
