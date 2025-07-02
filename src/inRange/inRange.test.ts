import inRange from "./inRange";

describe("inRange", () => {
  it("returns true when value is within the inclusive range", () => {
    expect(inRange(5, 1, 10)).toBe(true);
    expect(inRange(1, 1, 10)).toBe(true);
    expect(inRange(10, 1, 10)).toBe(true);
  });

  it("returns false when value is outside the inclusive range", () => {
    expect(inRange(0, 1, 10)).toBe(false);
    expect(inRange(11, 1, 10)).toBe(false);
  });

  it("returns true when value is within the exclusive range", () => {
    expect(inRange(5, 1, 10, false)).toBe(true);
  });

  it("returns false when value is equal to min or max in exclusive mode", () => {
    expect(inRange(1, 1, 10, false)).toBe(false);
    expect(inRange(10, 1, 10, false)).toBe(false);
  });

  it("returns false when range is inverted", () => {
    expect(inRange(5, 10, 1)).toBe(false);
    expect(inRange(5, 10, 1, false)).toBe(false);
  });
});
