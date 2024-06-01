import add from "./add";

describe("add", () => {
  test("should add two numbers", () => {
    expect(add(3, 2)).toBe(5);
    expect(add(3, -2)).toBe(1);
    expect(add(-3, 2)).toBe(-1);
    expect(add(-3, -2)).toBe(-5);
  });
});
