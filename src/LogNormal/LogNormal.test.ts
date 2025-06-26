import LogNormal from "./LogNormal";

describe("LogNormal", () => {
  describe("constructor", () => {
    it("initializes with valid mu and sigma", () => {
      const dist = new LogNormal(0, 1);
      expect(dist.mu).toBe(0);
      expect(dist.sigma).toBe(1);
    });

    it("throws with non-positive sigma", () => {
      expect(() => new LogNormal(0, 0)).toThrow();
      expect(() => new LogNormal(0, -1)).toThrow();
    });
  });

  describe("pdf", () => {
    const dist = new LogNormal(0, 1);

    it("returns 0 for x <= 0", () => {
      expect(dist.pdf(0)).toBe(0);
      expect(dist.pdf(-1)).toBe(0);
    });

    it("computes valid positive density", () => {
      const pdf = dist.pdf(1);
      expect(pdf).toBeGreaterThan(0);
    });
  });

  describe("cdf", () => {
    const dist = new LogNormal(0, 1);

    it("returns 0 for x <= 0", () => {
      expect(dist.cdf(0)).toBe(0);
    });

    it("increases with x and approaches 1", () => {
      expect(dist.cdf(0.5)).toBeLessThan(dist.cdf(1));
      expect(dist.cdf(25)).toBeGreaterThan(0.99);
    });
  });

  describe("mean and variance", () => {
    const dist = new LogNormal(0, 1);

    it("returns expected mean", () => {
      expect(dist.mean()).toBeCloseTo(Math.exp(0.5));
    });

    it("returns expected variance", () => {
      const expected = (Math.exp(1) - 1) * Math.exp(1);
      expect(dist.variance()).toBeCloseTo(expected);
    });
  });

  describe("sample", () => {
    const dist = new LogNormal(0, 0.5);

    it("produces positive values", () => {
      for (let i = 0; i < 100; i++) {
        const x = dist.sample();
        expect(x).toBeGreaterThan(0);
      }
    });

    it("generates samples close to theoretical mean", () => {
      const n = 10000;
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += dist.sample();
      }
      const mean = sum / n;
      expect(mean).toBeCloseTo(dist.mean(), 1);
    });
  });
});
