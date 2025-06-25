import ceil from "./ceil";

describe("ceil", () => {
  it("rounds up positive decimals", () => {
    expect(ceil(3.1)).toBe(4);
    expect(ceil(0.01)).toBe(1);
  });

  it("rounds up negative decimals toward zero", () => {
    expect(ceil(-2.8)).toBe(-2);
    expect(ceil(-0.1)).toBe(0);
  });

  it("returns same value if already an integer", () => {
    expect(ceil(5)).toBe(5);
    expect(ceil(-7)).toBe(-7);
  });
});
