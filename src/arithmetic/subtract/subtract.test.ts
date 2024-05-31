import subtract from "./subtract";

describe("subtract", () => {
  test("should subtract two numbers", () => {
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(3, -2)).toBe(5);
    expect(subtract(-3, 2)).toBe(-5);
    expect(subtract(-3, -2)).toBe(-1);
  });
});
