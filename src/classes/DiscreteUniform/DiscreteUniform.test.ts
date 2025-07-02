import DiscreteUniform from "./DiscreteUniform";

describe("DiscreteUniform", () => {
  describe("constructor", () => {
    it("initializes with valid bounds", () => {
      const d = new DiscreteUniform(1, 5);
      expect(d.a).toBe(1);
      expect(d.b).toBe(5);
    });

    it("throws on invalid bounds", () => {
      expect(() => new DiscreteUniform(5, 4)).toThrow();
      expect(() => new DiscreteUniform(1.1, 3)).toThrow();
    });
  });

  describe("pmf", () => {
    const d = new DiscreteUniform(1, 4);

    it("returns correct probability for values in range", () => {
      expect(d.pmf(1)).toBeCloseTo(0.25);
      expect(d.pmf(2)).toBeCloseTo(0.25);
      expect(d.pmf(4)).toBeCloseTo(0.25);
    });

    it("returns 0 for values out of range", () => {
      expect(d.pmf(0)).toBe(0);
      expect(d.pmf(5)).toBe(0);
      expect(d.pmf(2.5)).toBe(0);
    });
  });

  describe("cdf", () => {
    const d = new DiscreteUniform(1, 5);

    it("returns 0 for values below the range", () => {
      expect(d.cdf(0)).toBe(0);
    });

    it("returns 1 for values above the range", () => {
      expect(d.cdf(6)).toBe(1);
    });

    it("returns correct cumulative probability within range", () => {
      expect(d.cdf(1)).toBeCloseTo(1 / 5);
      expect(d.cdf(3)).toBeCloseTo(3 / 5);
      expect(d.cdf(5)).toBeCloseTo(1);
    });
  });

  describe("mean and variance", () => {
    const d = new DiscreteUniform(3, 7);

    it("calculates mean correctly", () => {
      expect(d.mean()).toBe(5);
    });

    it("calculates variance correctly", () => {
      const expected = ((7 - 3 + 1) ** 2 - 1) / 12;
      expect(d.variance()).toBeCloseTo(expected);
    });
  });

  describe("sample", () => {
    const d = new DiscreteUniform(10, 20);

    it("produces integers within the range", () => {
      for (let i = 0; i < 1000; i++) {
        const value = d.sample();
        expect(Number.isInteger(value)).toBe(true);
        expect(value).toBeGreaterThanOrEqual(10);
        expect(value).toBeLessThanOrEqual(20);
      }
    });
  });
});
