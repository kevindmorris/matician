import add from "./add";

describe("add module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("adds 1 + (-2) to equal (-1)", () => {
    expect(add(1, -2)).toBe(-1);
  });
});
