import NegativeBinomial from "./NegativeBinomial";

describe("NegativeBinomial", () => {
  describe("constructor", () => {
    it("initializes with valid parameters", () => {
      const nb = new NegativeBinomial(5, 0.3);
      expect(nb.r).toBe(5);
      expect(nb.p).toBeCloseTo(0.3);
      expect(nb.q).toBeCloseTo(0.7);
    });

    it("throws on invalid parameters", () => {
      expect(() => new NegativeBinomial(0, 0.5)).toThrow();
      expect(() => new NegativeBinomial(2, 0)).toThrow();
      expect(() => new NegativeBinomial(2, 1.5)).toThrow();
    });
  });

  describe("pmf", () => {
    const nb = new NegativeBinomial(3, 0.5);

    it("returns 0 for k < 0 or non-integers", () => {
      expect(nb.pmf(-1)).toBe(0);
      expect(nb.pmf(1.5)).toBe(0);
    });

    it("computes correct PMF values", () => {
      expect(nb.pmf(0)).toBeCloseTo(0.125); // (2 choose 0) * 0.5^3
      expect(nb.pmf(1)).toBeCloseTo(0.1875);
    });
  });

  describe("cdf", () => {
    const nb = new NegativeBinomial(2, 0.5);

    it("returns 0 for k < 0", () => {
      expect(nb.cdf(-1)).toBe(0);
    });

    it("computes cumulative probability", () => {
      const nb = new NegativeBinomial(3, 0.5);
      const value = nb.cdf(3);
      expect(value).toBeCloseTo(0.65625, 4);
    });
  });

  describe("mean and variance", () => {
    const nb = new NegativeBinomial(4, 0.2);

    it("returns expected mean", () => {
      expect(nb.mean()).toBeCloseTo(16);
    });

    it("returns expected variance", () => {
      expect(nb.variance()).toBeCloseTo(80);
    });
  });

  describe("sample", () => {
    const nb = new NegativeBinomial(3, 0.25);

    it("returns non-negative integers", () => {
      for (let i = 0; i < 100; i++) {
        const sample = nb.sample();
        expect(Number.isInteger(sample)).toBe(true);
        expect(sample).toBeGreaterThanOrEqual(0);
      }
    });

    it("produces values near expected mean", () => {
      const n = 50000;
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += nb.sample();
      }
      const avg = sum / n;
      expect(avg).toBeCloseTo(nb.mean(), 1);
    });
  });
});
