import factorial from "./factorial";

describe("factorial module", () => {
  test("(-1)! to be undefined", () => {
    expect(factorial(-1)).toBeNaN();
  });
  test("0! to equal 1", () => {
    expect(factorial(0)).toBe(1);
  });
  test("1! to equal 1", () => {
    expect(factorial(1)).toBe(1);
  });
  test("2! to equal 2", () => {
    expect(factorial(2)).toBe(2);
  });
  test("3! to equal 6", () => {
    expect(factorial(3)).toBe(6);
  });
  test("4! to equal 24", () => {
    expect(factorial(4)).toBe(24);
  });
  test("5! to equal 120", () => {
    expect(factorial(5)).toBe(120);
  });
});
