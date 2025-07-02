import ContinuousUniform from "./ContinuousUniform";

describe("ContinuousUniform", () => {
  describe("constructor", () => {
    it("sets valid bounds", () => {
      const d = new ContinuousUniform(1, 5);
      expect(d.a).toBe(1);
      expect(d.b).toBe(5);
    });

    it("throws if a >= b", () => {
      expect(() => new ContinuousUniform(5, 5)).toThrow();
      expect(() => new ContinuousUniform(6, 5)).toThrow();
    });
  });

  describe("pdf", () => {
    const d = new ContinuousUniform(0, 2);

    it("returns 0 for out-of-bounds x", () => {
      expect(d.pdf(-1)).toBe(0);
      expect(d.pdf(3)).toBe(0);
    });

    it("returns constant for x in [a, b]", () => {
      expect(d.pdf(0)).toBeCloseTo(0.5);
      expect(d.pdf(1)).toBeCloseTo(0.5);
      expect(d.pdf(2)).toBeCloseTo(0.5);
    });
  });

  describe("cdf", () => {
    const d = new ContinuousUniform(10, 20);

    it("returns 0 for x < a", () => {
      expect(d.cdf(5)).toBe(0);
    });

    it("returns 1 for x > b", () => {
      expect(d.cdf(25)).toBe(1);
    });

    it("returns linear value for x in [a, b]", () => {
      expect(d.cdf(10)).toBe(0);
      expect(d.cdf(15)).toBe(0.5);
      expect(d.cdf(20)).toBe(1);
    });
  });

  describe("mean and variance", () => {
    const d = new ContinuousUniform(3, 9);

    it("computes mean", () => {
      expect(d.mean()).toBe(6);
    });

    it("computes variance", () => {
      expect(d.variance()).toBeCloseTo(3); // (9 - 3)^2 / 12 = 36 / 12
    });
  });

  describe("sample", () => {
    const d = new ContinuousUniform(0, 1);

    it("generates samples in [a, b]", () => {
      for (let i = 0; i < 1000; i++) {
        const value = d.sample();
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(1);
      }
    });

    it("produces values near the mean", () => {
      const d = new ContinuousUniform(5, 15);
      const n = 10000;
      let total = 0;
      for (let i = 0; i < n; i++) {
        total += d.sample();
      }
      const avg = total / n;
      expect(avg).toBeGreaterThan(9.8);
      expect(avg).toBeLessThan(10.2);
    });
  });
});
