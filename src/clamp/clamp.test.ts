import clamp from "./clamp";

describe("clamp", () => {
  it("returns the value when within range", () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it("clamps value below minimum", () => {
    expect(clamp(0, 1, 10)).toBe(1);
  });

  it("clamps value above maximum", () => {
    expect(clamp(15, 1, 10)).toBe(10);
  });

  it("handles edge case when value equals min or max", () => {
    expect(clamp(1, 1, 10)).toBe(1);
    expect(clamp(10, 1, 10)).toBe(10);
  });

  it("throws an error if min is greater than max", () => {
    expect(() => clamp(5, 10, 1)).toThrow(
      "Minimum cannot be greater than maximum"
    );
  });
});
