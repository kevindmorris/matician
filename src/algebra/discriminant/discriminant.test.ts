import discriminant from "./discriminant";

describe("discriminant", () => {
  test("should find the discriminant", () => {
    expect(discriminant(1, -2, 1)).toBe(0);
    expect(discriminant(1, 2, -1)).toBe(8);
  });
});
