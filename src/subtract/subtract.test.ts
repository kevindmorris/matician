import subtract from "./subtract";

describe("subtract", () => {
  it("subtracts smaller number from larger", () => {
    expect(subtract(10, 3)).toBe(7);
  });

  it("subtracts larger number from smaller", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  it("subtracts with zero", () => {
    expect(subtract(5, 0)).toBe(5);
    expect(subtract(0, 5)).toBe(-5);
  });

  it("subtracts negative numbers", () => {
    expect(subtract(-5, -2)).toBe(-3);
    expect(subtract(-2, -5)).toBe(3);
  });

  it("handles floating point numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});
