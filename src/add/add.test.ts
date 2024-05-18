import add from "./add";

describe("add module", () => {
  test("adds 3 + 2 to equal 1", () => {
    expect(add(3, 2)).toBe(5);
  });
  test("adds 3 + (-2) to equal 1", () => {
    expect(add(3, -2)).toBe(1);
  });
  test("adds (-3) + 2 to equal (-1)", () => {
    expect(add(-3, 2)).toBe(-1);
  });
  test("adds (-3) + (-2) to equal (-5)", () => {
    expect(add(-3, -2)).toBe(-5);
  });
});
