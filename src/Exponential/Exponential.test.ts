import Exponential from "./Exponential";

describe("Exponential", () => {
  describe("constructor", () => {
    it("initializes with valid lambda", () => {
      const dist = new Exponential(2);
      expect(dist.lambda).toBe(2);
    });

    it("throws with non-positive lambda", () => {
      expect(() => new Exponential(0)).toThrow();
      expect(() => new Exponential(-1)).toThrow();
    });
  });

  describe("pdf", () => {
    const dist = new Exponential(2);

    it("returns 0 for x < 0", () => {
      expect(dist.pdf(-1)).toBe(0);
    });

    it("computes correct density for x >= 0", () => {
      expect(dist.pdf(0)).toBeCloseTo(2);
      expect(dist.pdf(1)).toBeCloseTo(2 * Math.exp(-2));
    });
  });

  describe("cdf", () => {
    const dist = new Exponential(2);

    it("returns 0 for x < 0", () => {
      expect(dist.cdf(-1)).toBe(0);
    });

    it("returns correct cumulative value", () => {
      expect(dist.cdf(0)).toBeCloseTo(0);
      expect(dist.cdf(1)).toBeCloseTo(1 - Math.exp(-2));
    });
  });

  describe("mean and variance", () => {
    const dist = new Exponential(4);

    it("returns 1 / lambda for mean", () => {
      expect(dist.mean()).toBeCloseTo(0.25);
    });

    it("returns 1 / lambda² for variance", () => {
      expect(dist.variance()).toBeCloseTo(1 / 16);
    });
  });

  describe("sample", () => {
    const dist = new Exponential(1.5);

    it("generates values >= 0", () => {
      for (let i = 0; i < 1000; i++) {
        const sample = dist.sample();
        expect(sample).toBeGreaterThanOrEqual(0);
      }
    });

    it("generates values close to mean over many samples", () => {
      const n = 10000;
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += dist.sample();
      }
      const empiricalMean = sum / n;
      expect(empiricalMean).toBeCloseTo(dist.mean(), 1);
    });
  });
});
