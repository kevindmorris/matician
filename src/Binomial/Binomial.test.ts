import Binomial from "./Binomial";

describe("Binomial", () => {
  describe("constructor", () => {
    it("stores valid parameters", () => {
      const b = new Binomial(10, 0.4);
      expect(b.n).toBe(10);
      expect(b.p).toBeCloseTo(0.4);
      expect(b.q).toBeCloseTo(0.6);
    });

    it("throws for invalid n or p", () => {
      expect(() => new Binomial(-1, 0.5)).toThrow();
      expect(() => new Binomial(5.5, 0.5)).toThrow();
      expect(() => new Binomial(5, -0.1)).toThrow();
      expect(() => new Binomial(5, 1.1)).toThrow();
    });
  });

  describe("pmf", () => {
    const b = new Binomial(5, 0.5);

    it("returns correct PMF for valid k", () => {
      expect(b.pmf(0)).toBeCloseTo(0.03125);
      expect(b.pmf(2)).toBeCloseTo(0.3125);
      expect(b.pmf(5)).toBeCloseTo(0.03125);
    });

    it("returns 0 for invalid k", () => {
      expect(b.pmf(-1)).toBe(0);
      expect(b.pmf(6)).toBe(0);
      expect(b.pmf(2.5)).toBe(0);
    });
  });

  describe("cdf", () => {
    const b = new Binomial(4, 0.5);

    it("returns correct CDF values", () => {
      expect(b.cdf(-1)).toBe(0);
      expect(b.cdf(0)).toBeCloseTo(b.pmf(0));
      expect(b.cdf(4)).toBe(1);
    });
  });

  describe("mean and variance", () => {
    const b = new Binomial(20, 0.3);

    it("computes mean correctly", () => {
      expect(b.mean()).toBeCloseTo(6);
    });

    it("computes variance correctly", () => {
      expect(b.variance()).toBeCloseTo(20 * 0.3 * 0.7);
    });
  });

  describe("sample", () => {
    it("generates values within [0, n]", () => {
      const b = new Binomial(10, 0.5);
      for (let i = 0; i < 100; i++) {
        const value = b.sample();
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(10);
        expect(Number.isInteger(value)).toBe(true);
      }
    });

    it("produces roughly correct mean", () => {
      const b = new Binomial(10, 0.25);
      const samples = 10000;
      let sum = 0;
      for (let i = 0; i < samples; i++) {
        sum += b.sample();
      }
      const avg = sum / samples;
      expect(avg).toBeGreaterThan(2);
      expect(avg).toBeLessThan(3);
    });
  });
});
