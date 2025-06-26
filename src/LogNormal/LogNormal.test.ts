import LogNormal from "./LogNormal";

describe("LogNormal", () => {
  test("constructor throws on invalid sigma", () => {
    expect(() => new LogNormal(0, 0)).toThrow();
    expect(() => new LogNormal(0, -1)).toThrow();
  });

  test("pdf returns 0 for x <= 0", () => {
    const lognorm = new LogNormal(0, 1);
    expect(lognorm.pdf(0)).toBe(0);
    expect(lognorm.pdf(-1)).toBe(0);
  });

  test("pdf returns expected shape for known inputs", () => {
    const lognorm = new LogNormal(0, 1);
    const pdf1 = lognorm.pdf(1); // mode
    const pdf2 = lognorm.pdf(2); // tail
    const pdf3 = lognorm.pdf(0.5); // left tail
    expect(pdf1).toBeGreaterThan(pdf2);
    expect(pdf3).toBeGreaterThan(pdf1);
  });

  test("cdf returns 0 for x <= 0", () => {
    const lognorm = new LogNormal(0, 1);
    expect(lognorm.cdf(0)).toBe(0);
    expect(lognorm.cdf(-5)).toBe(0);
  });

  test("cdf approaches 1 as x increases", () => {
    const lognorm = new LogNormal(0, 1);
    expect(lognorm.cdf(10)).toBeGreaterThan(0.98);
    expect(lognorm.cdf(20)).toBeGreaterThan(0.99);
  });

  test("cdf is increasing", () => {
    const lognorm = new LogNormal(0, 1);
    expect(lognorm.cdf(1)).toBeLessThan(lognorm.cdf(2));
    expect(lognorm.cdf(2)).toBeLessThan(lognorm.cdf(3));
  });
});
