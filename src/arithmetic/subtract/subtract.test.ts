import subtract from "./subtract";

describe("subtract", () => {
  test("should subtract two numbers", () => {
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(3, -2)).toBe(5);
    expect(subtract(-3, 2)).toBe(-5);
    expect(subtract(-3, -2)).toBe(-1);
  });
  test("should subtract more than 2 numbers", () => {
    expect(subtract(1, 2, 3)).toBe(-4);
    expect(subtract(1, 2, 3, 4)).toBe(-8);
    expect(subtract(1, 2, 3, 4, -5)).toBe(-3);
  });
});
