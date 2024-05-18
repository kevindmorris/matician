import combination from "./combination";

describe("combination module", () => {
  test("C(1, 2) to be undefined", () => {
    expect(combination(1, 2)).toBeNaN();
  });
  test("C(-1, -2) to be undefined", () => {
    expect(combination(-1, 2)).toBeNaN();
  });
  test("C(1, -2) to be undefined", () => {
    expect(combination(1, -2)).toBeNaN();
  });
  test("C(10, 2) to be 45", () => {
    expect(combination(10, 2)).toBe(45);
  });
  test("C(10, 2) to be 45", () => {
    expect(combination(10, 2, { replacement: false })).toBe(45);
  });
  test("Cr(10, 2) to be 55", () => {
    expect(combination(10, 2, { replacement: true })).toBe(55);
  });
  test("C(10, 3) to be 120", () => {
    expect(combination(10, 3)).toBe(120);
  });
  test("C(10, 3) to be 120", () => {
    expect(combination(10, 3, { replacement: false })).toBe(120);
  });
  test("Cr(10, 3) to be 220", () => {
    expect(combination(10, 3, { replacement: true })).toBe(220);
  });
});

