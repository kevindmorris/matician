import Uniform from "./Uniform";

describe("Uniform module", () => {
  test("should throw an error", () => {
    expect(() => new Uniform(0, 0.5)).toThrow("Invalid parameters");
    expect(() => new Uniform(0, -1)).toThrow("Invalid parameters");
    expect(() => new Uniform(10, 5)).toThrow("Invalid parameters");
  });
  test("should calcluate the discrete uniform distribution", () => {
    let u = new Uniform(1, 10);
    expect(u.n).toBe(10);
    expect(u.mean).toBe(5.5);
    expect(u.variance).toBe(8.25);
    expect(u.stdev).toBe(Math.sqrt(8.25));

    expect(u.pEqualTo(1)).toBe(0.1);
    expect(u.pEqualTo(2)).toBe(0.1);
    expect(u.pEqualTo(3)).toBe(0.1);
    expect(u.pEqualTo(0)).toBeNaN();
    expect(u.pEqualTo(2.5)).toBeNaN();
    expect(u.pEqualTo(11)).toBeNaN();

    expect(u.pLessThanOrEqualTo(1)).toBe(0.1);
    expect(u.pLessThanOrEqualTo(2)).toBe(0.2);
    expect(u.pLessThanOrEqualTo(3)).toBe(0.3);
    expect(u.pLessThanOrEqualTo(0)).toBeNaN();
    expect(u.pLessThanOrEqualTo(2.5)).toBeNaN();
    expect(u.pLessThanOrEqualTo(11)).toBeNaN();

    u = new Uniform(5, 11);
    expect(u.n).toBe(7);
    expect(u.mean).toBe(8);
    expect(u.variance).toBe(48 / 12);
    expect(u.stdev).toBe(Math.sqrt(48 / 12));

    expect(u.pEqualTo(5)).toBe(1 / 7);
    expect(u.pEqualTo(6)).toBe(1 / 7);
    expect(u.pEqualTo(7)).toBe(1 / 7);

    expect(u.pLessThanOrEqualTo(5)).toBe(1 / 7);
    expect(u.pLessThanOrEqualTo(6)).toBe(2 / 7);
    expect(u.pLessThanOrEqualTo(7)).toBe(3 / 7);
  });
});
