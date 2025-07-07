import add from "./add";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds positive and negative numbers", () => {
    expect(add(-1, 4)).toBe(3);
    expect(add(4, -1)).toBe(3);
  });

  it("adds two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds more than two numbers", () => {
    expect(add(1, 2, 3)).toBe(6);
    expect(add(1, 2, 3, 4, 5)).toBe(15);
    expect(add(1, 2, 3, 4, -5)).toBe(5);
  });

  it("adds zero correctly", () => {
    expect(add(0, 0)).toBe(0);
    expect(add(0, 5)).toBe(5);
  });

  it("handles decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});
