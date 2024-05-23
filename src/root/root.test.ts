import root from "./root";

describe("root module", () => {
  test("should find the root of a number", () => {
    expect(root(1, 1)).toBe(1);
    expect(root(4, 2)).toBe(2);
    expect(root(27, 3)).toBe(3);
  });
});
