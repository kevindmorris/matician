import permutations from "./permutations";

describe("permutations", () => {
  it("calculates permutations for n = 5, r = 3", () => {
    expect(permutations(5, 3)).toBe(60); // 5 * 4 * 3 = 60
  });

  it("returns 1 for n = 0, r = 0", () => {
    expect(permutations(0, 0)).toBe(1);
  });

  it("throws when r > n", () => {
    expect(() => permutations(3, 4)).toThrow("r cannot be greater than n");
  });

  it("throws for negative input", () => {
    expect(() => permutations(-1, 2)).toThrow("Inputs must be non-negative");
    expect(() => permutations(2, -1)).toThrow("Inputs must be non-negative");
  });

  it("throws for non-integer input", () => {
    expect(() => permutations(5.5, 2)).toThrow("Inputs must be integers");
    expect(() => permutations(5, 1.2)).toThrow("Inputs must be integers");
  });
});
