import Poisson from "./Poisson";

describe("Poisson", () => {
  describe("constructor", () => {
    it("initializes with valid lambda", () => {
      const d = new Poisson(4);
      expect(d.lambda).toBe(4);
    });

    it("throws on non-positive lambda", () => {
      expect(() => new Poisson(0)).toThrow();
      expect(() => new Poisson(-1)).toThrow();
    });
  });

  describe("pmf", () => {
    const d = new Poisson(2);

    it("returns 0 for negative or non-integer k", () => {
      expect(d.pmf(-1)).toBe(0);
      expect(d.pmf(1.5)).toBe(0);
    });

    it("returns correct probabilities", () => {
      expect(d.pmf(0)).toBeCloseTo(Math.exp(-2));
      expect(d.pmf(1)).toBeCloseTo(2 * Math.exp(-2));
      expect(d.pmf(2)).toBeCloseTo((2 ** 2 / 2) * Math.exp(-2));
    });
  });

  describe("cdf", () => {
    const d = new Poisson(2);

    it("returns 0 for k < 0", () => {
      expect(d.cdf(-1)).toBe(0);
    });

    it("returns cumulative probability", () => {
      const expected = d.pmf(0) + d.pmf(1) + d.pmf(2);
      expect(d.cdf(2)).toBeCloseTo(expected);
    });
  });

  describe("mean and variance", () => {
    const d = new Poisson(5);

    it("returns λ as mean and variance", () => {
      expect(d.mean()).toBe(5);
      expect(d.variance()).toBe(5);
    });
  });

  describe("sample", () => {
    const d = new Poisson(3);

    it("produces non-negative integers", () => {
      for (let i = 0; i < 100; i++) {
        const x = d.sample();
        expect(Number.isInteger(x)).toBe(true);
        expect(x).toBeGreaterThanOrEqual(0);
      }
    });

    it("produces values close to mean", () => {
      const dist = new Poisson(4);
      let sum = 0;
      const N = 10000;
      for (let i = 0; i < N; i++) sum += dist.sample();
      const avg = sum / N;
      expect(avg).toBeCloseTo(4, 1);
    });
  });
});
