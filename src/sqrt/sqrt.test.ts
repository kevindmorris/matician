import sqrt from "./sqrt";

describe("sqrt module", () => {
  test("square root of -1 to be undefined", () => {
    expect(sqrt(-1)).toBeNaN();
  });
  test("square root of 4 to equal 2", () => {
    expect(sqrt(4)).toBe(2);
  });
  test("square root of 16 to equal 4", () => {
    expect(sqrt(16)).toBe(4);
  });
});
