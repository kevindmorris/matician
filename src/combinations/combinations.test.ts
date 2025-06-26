import combinations from "./combinations";

describe("combinations (default: with replacement)", () => {
  describe("with replacement (default)", () => {
    it("computes (n + k - 1) choose k", () => {
      expect(combinations(5, 3)).toBe(35); // 7C3
      expect(combinations(3, 3)).toBe(10); // 5C3
      expect(combinations(1, 3)).toBe(1); // 3C3
    });
  });

  describe("without replacement", () => {
    it("computes n choose k", () => {
      expect(combinations(5, 3, false)).toBe(10); // 5C3
      expect(combinations(4, 2, false)).toBe(6); // 4C2
      expect(combinations(6, 0, false)).toBe(1); // 6C0
      expect(combinations(6, 6, false)).toBe(1); // 6C6
    });

    it("returns 0 if k > n", () => {
      expect(combinations(2, 5, false)).toBe(0);
    });
  });

  describe("input validation", () => {
    it("throws for negative inputs", () => {
      expect(() => combinations(-1, 2)).toThrow();
      expect(() => combinations(3, -2)).toThrow();
    });

    it("throws for non-integer inputs", () => {
      expect(() => combinations(5.5, 2)).toThrow();
      expect(() => combinations(4, 2.2)).toThrow();
    });
  });
});
