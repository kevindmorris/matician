import solveQuadratic from "./solveQuadratic";

describe("solveQuadratic", () => {
  it("solves with two real roots", () => {
    const result = solveQuadratic(1, 0, -4);
    expect(result).toEqual(
      expect.arrayContaining([
        { real: 2, imag: 0 },
        { real: -2, imag: 0 }
      ])
    );
  });

  it("solves with one repeated real root", () => {
    const result = solveQuadratic(1, 2, 1);
    expect(result).toEqual([
      { real: -1, imag: 0 },
      { real: -1, imag: 0 }
    ]);
  });

  it("solves with two complex roots", () => {
    const result = solveQuadratic(1, 0, 4);
    expect(result).toEqual(
      expect.arrayContaining([
        { real: 0, imag: 2 },
        { real: 0, imag: -2 }
      ])
    );
  });

  it("does not return -0 values", () => {
    const roots = solveQuadratic(1, 0, 4);
    for (const root of roots) {
      expect(Object.is(root.real, -0)).toBe(false);
      expect(Object.is(root.imag, -0)).toBe(false);
    }
  });

  it("throws when a is 0", () => {
    expect(() => solveQuadratic(0, 1, -1)).toThrow(
      'Coefficient "a" cannot be zero'
    );
  });
});
