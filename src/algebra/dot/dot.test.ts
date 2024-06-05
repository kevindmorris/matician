import dot from "./dot";

describe("dot", () => {
  test("should be undefined", () => {
    expect(dot()).toBeUndefined();
    expect(dot([1, 2], [1])).toBeUndefined();
    expect(dot([], [1, 2])).toBeUndefined();
    expect(dot([1, 2], [1, 2], [1, 2, 3])).toBeUndefined();
  });
  test("should find the dot product", () => {
    expect(dot([1, 2], [1, 2])).toBe(5);
    expect(dot([1, 2, 3], [1, 2, 3])).toBe(14);
    expect(dot([1, 2, 3, 4], [1, 2, 3, 4])).toBe(30);
    expect(dot([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4])).toBe(100);
    expect(dot([10, 2], [-3, 5])).toBe(-20);
    expect(dot([10, 2, -1], [-3, 5, -5])).toBe(-15);
    expect(dot([10, 2, -1], [-3, 5, -5], [-2, 0, 2])).toBe(70);
  });
});
