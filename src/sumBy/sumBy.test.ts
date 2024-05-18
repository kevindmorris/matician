import sumBy from "./sumBy";

describe("sumBy module", () => {
  test("sum of array to be undefined", () => {
    expect(sumBy([{ x: 1 }, { x: -2 }, { x: 3 }], (o) => o.y)).toBeNaN();
  });
  test("sum of array to equal 0", () => {
    expect(sumBy([], (o) => o.y)).toBe(0);
  });
  test("sum of array to equal 6", () => {
    expect(sumBy([{ x: 1 }, { x: 2 }, { x: 3 }], (o) => o.x)).toBe(6);
  });
  test("sum of array to equal 2", () => {
    expect(sumBy([{ x: 1 }, { x: -2 }, { x: 3 }], (o) => o.x)).toBe(2);
  });
});
