import mode from "./mode";

describe("mode", () => {
  it("returns the mode for a simple array", () => {
    expect(mode([1, 2, 2, 3])).toEqual([2]);
  });

  it("returns multiple modes in case of tie", () => {
    expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2]);
  });

  it("returns all numbers if all occur equally", () => {
    expect(mode([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("returns a single value array if only one number is present", () => {
    expect(mode([7, 7, 7])).toEqual([7]);
  });

  it("throws for empty arrays", () => {
    expect(() => mode([])).toThrow("Cannot compute mode of an empty array");
  });
});
