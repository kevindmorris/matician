import Geometric from "./Geometric";

describe("Geometric", () => {
  describe("constructor", () => {
    it("initializes with valid p", () => {
      const dist = new Geometric(0.25);
      expect(dist.p).toBeCloseTo(0.25);
      expect(dist.q).toBeCloseTo(0.75);
    });

    it("throws for invalid p", () => {
      expect(() => new Geometric(0)).toThrow();
      expect(() => new Geometric(1.1)).toThrow();
      expect(() => new Geometric(-0.1)).toThrow();
    });
  });

  describe("pmf", () => {
    const dist = new Geometric(0.5);

    it("returns 0 for k < 1 or non-integers", () => {
      expect(dist.pmf(0)).toBe(0);
      expect(dist.pmf(1.5)).toBe(0);
    });

    it("computes correct PMF", () => {
      expect(dist.pmf(1)).toBeCloseTo(0.5);
      expect(dist.pmf(2)).toBeCloseTo(0.25);
      expect(dist.pmf(3)).toBeCloseTo(0.125);
    });
  });

  describe("cdf", () => {
    const dist = new Geometric(0.5);

    it("returns 0 for k < 1", () => {
      expect(dist.cdf(0)).toBe(0);
    });

    it("computes correct CDF", () => {
      expect(dist.cdf(1)).toBeCloseTo(0.5);
      expect(dist.cdf(2)).toBeCloseTo(0.75);
      expect(dist.cdf(3)).toBeCloseTo(0.875);
    });
  });

  describe("mean and variance", () => {
    const dist = new Geometric(0.2);

    it("returns 1 / p for mean", () => {
      expect(dist.mean()).toBeCloseTo(5);
    });

    it("returns (1 - p) / p² for variance", () => {
      expect(dist.variance()).toBeCloseTo((1 - 0.2) / (0.2 * 0.2));
    });
  });

  describe("sample", () => {
    const dist = new Geometric(0.3);

    it("produces integers ≥ 1", () => {
      for (let i = 0; i < 100; i++) {
        const x = dist.sample();
        expect(Number.isInteger(x)).toBe(true);
        expect(x).toBeGreaterThanOrEqual(1);
      }
    });

    it("produces samples near the expected mean", () => {
      const dist = new Geometric(0.3);
      let sum = 0;
      const N = 10000;
      for (let i = 0; i < N; i++) {
        sum += dist.sample();
      }
      const avg = sum / N;
      expect(avg).toBeCloseTo(dist.mean(), 1);
    });
  });
});
