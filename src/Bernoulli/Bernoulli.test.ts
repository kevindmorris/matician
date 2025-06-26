import Bernoulli from "./Bernoulli";

describe("Bernoulli", () => {
  describe("constructor", () => {
    it("creates a distribution with valid p", () => {
      const b = new Bernoulli(0.3);
      expect(b.p).toBeCloseTo(0.3);
      expect(b.q).toBeCloseTo(0.7);
    });

    it("throws for p < 0 or p > 1", () => {
      expect(() => new Bernoulli(-0.1)).toThrow();
      expect(() => new Bernoulli(1.1)).toThrow();
    });
  });

  describe("pmf", () => {
    const b = new Bernoulli(0.4);

    it("returns correct value for x = 0", () => {
      expect(b.pmf(0)).toBeCloseTo(0.6); // q
    });

    it("returns correct value for x = 1", () => {
      expect(b.pmf(1)).toBeCloseTo(0.4); // p
    });

    it("returns 0 for invalid x", () => {
      expect(b.pmf(-1)).toBe(0);
      expect(b.pmf(2)).toBe(0);
    });
  });

  describe("cdf", () => {
    const b = new Bernoulli(0.25);

    it("returns 0 for x < 0", () => {
      expect(b.cdf(-0.5)).toBe(0);
    });

    it("returns q for 0 ≤ x < 1", () => {
      expect(b.cdf(0.5)).toBeCloseTo(0.75);
    });

    it("returns 1 for x ≥ 1", () => {
      expect(b.cdf(1)).toBe(1);
      expect(b.cdf(2)).toBe(1);
    });
  });

  describe("mean and variance", () => {
    const b = new Bernoulli(0.6);

    it("computes mean", () => {
      expect(b.mean()).toBeCloseTo(0.6);
    });

    it("computes variance", () => {
      expect(b.variance()).toBeCloseTo(0.6 * 0.4); // pq
    });
  });

  describe("sample", () => {
    const b = new Bernoulli(0.5);

    it("returns 0 or 1", () => {
      for (let i = 0; i < 100; i++) {
        const result = b.sample();
        expect([0, 1]).toContain(result);
      }
    });

    it("approximates correct probability", () => {
      const trials = 10000;
      const b = new Bernoulli(0.3);
      let count = 0;

      for (let i = 0; i < trials; i++) {
        count += b.sample();
      }

      const estimatedP = count / trials;
      expect(estimatedP).toBeGreaterThan(0.25);
      expect(estimatedP).toBeLessThan(0.35);
    });
  });
});
