import sumBy from "./sumBy";

describe("sum module", () => {
  test("sum of array to equal 6", () => {
    expect(sumBy([{ x: 1 }, { x: 2 }, { x: 3 }], (o) => o.x)).toBe(6);
  });
  test("sum of array to equal 2", () => {
    expect(sumBy([{ x: 1 }, { x: -2 }, { x: 3 }], (o) => o.x)).toBe(2);
  });
  test("sum of array to with bad iteratee", () => {
    expect(sumBy([{ x: 1 }, { x: -2 }, { x: 3 }], (o) => o.y)).toBeNaN();
  });
});
