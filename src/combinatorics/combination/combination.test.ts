import combination from "./combination";

describe("combination", () => {
  test("should return NaN", () => {
    expect(combination(2.5, 1)).toBeNaN();
    expect(combination(2, 1.5)).toBeNaN();
    expect(combination(1, 2)).toBeNaN();
    expect(combination(-1, 2)).toBeNaN();
    expect(combination(1, -2)).toBeNaN();
    expect(combination(0, 0, { replacement: true })).toBeNaN();
  });
  test("should calculate the combinations without replacement", () => {
    expect(combination(0, 0)).toBe(1);
    expect(combination(1, 1)).toBe(1);
    expect(combination(10, 0)).toBe(1);
    expect(combination(10, 2)).toBe(45);
    expect(combination(10, 3)).toBe(120);
    expect(combination(20, 5, { replacement: false })).toBe(15504);
    expect(combination(20, 6, { replacement: false })).toBe(38760);
    expect(combination(20, 7, { replacement: false })).toBe(77520);
  });
  test("should calculate the combinations with replacement", () => {
    expect(combination(1, 1, { replacement: true })).toBe(1);
    expect(combination(10, 0, { replacement: true })).toBe(1);
    expect(combination(10, 2, { replacement: true })).toBe(55);
    expect(combination(10, 3, { replacement: true })).toBe(220);
    expect(combination(20, 5, { replacement: true })).toBe(42504);
    expect(combination(20, 6, { replacement: true })).toBe(177100);
    expect(combination(20, 7, { replacement: true })).toBe(657800);
  });
});
