import add from "./add";

describe("add", () => {
  test("should add two numbers", () => {
    expect(add(3, 2)).toBe(5);
    expect(add(3, -2)).toBe(1);
    expect(add(-3, 2)).toBe(-1);
    expect(add(-3, -2)).toBe(-5);
  });
  test("should add more than 2 numbers", () => {
    expect(add(1, 2, 3)).toBe(6);
    expect(add(1, 2, 3, 4)).toBe(10);
    expect(add(1, 2, 3, 4, -5)).toBe(5);
  });
});
