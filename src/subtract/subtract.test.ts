import subtract from "./subtract";

describe("subtract module", () => {
  test("subtracts 3 - 2 to equal 1", () => {
    expect(subtract(3, 2)).toBe(1);
  });
  test("subtracts 3 - (-2) to equal 5", () => {
    expect(subtract(3, -2)).toBe(5);
  });
  test("subtracts (-3) - 2 to equal (-5)", () => {
    expect(subtract(-3, 2)).toBe(-5);
  });
  test("subtracts (-3) - (-2) to equal (-1)", () => {
    expect(subtract(-3, -2)).toBe(-1);
  });
});
