import permutations from "./permutations";

describe("permutations (default: with replacement)", () => {
  describe("with replacement (default behavior)", () => {
    it("returns n^k", () => {
      expect(permutations(5, 2)).toBe(25); // 5^2
      expect(permutations(2, 3)).toBe(8); // 2^3
      expect(permutations(10, 0)).toBe(1); // 10^0
    });
  });

  describe("without replacement", () => {
    it("returns n! / (n - k)!", () => {
      expect(permutations(5, 2, false)).toBe(20); // 5 * 4
      expect(permutations(4, 3, false)).toBe(24); // 4 * 3 * 2
      expect(permutations(3, 3, false)).toBe(6); // 3!
    });

    it("returns 0 if k > n", () => {
      expect(permutations(2, 4, false)).toBe(0);
    });
  });

  describe("validation", () => {
    it("throws for negative values", () => {
      expect(() => permutations(-1, 2)).toThrow();
      expect(() => permutations(3, -1)).toThrow();
    });

    it("throws for non-integer input", () => {
      expect(() => permutations(3.5, 2)).toThrow();
      expect(() => permutations(4, 2.2)).toThrow();
    });
  });
});
