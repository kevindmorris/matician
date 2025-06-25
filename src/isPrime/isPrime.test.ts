import isPrime from "./isPrime";

describe("isPrime", () => {
  it("identifies prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  it("identifies non-prime numbers", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-7)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  it("returns false for non-integers", () => {
    expect(isPrime(2.5)).toBe(false);
    expect(isPrime(Math.PI)).toBe(false);
  });
});
