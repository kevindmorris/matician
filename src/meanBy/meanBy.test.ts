import meanBy from "./meanBy";

describe("meanBy module", () => {
  test("should find the mean of an array", () => {
    expect(meanBy([], (o) => o)).toBe(0);
    expect(meanBy([2, 4, 6, 8], (o) => o)).toBe(5);
    expect(meanBy([{ x: 2 }, { x: 4 }, { x: 6 }, { x: 8 }], (o) => o.x)).toBe(
      5
    );
    expect(meanBy([2, -4, 6, -8], (o) => o)).toBe(-1);
    expect(meanBy([{ x: 2 }, { x: -4 }, { x: 6 }, { x: -8 }], (o) => o.x)).toBe(
      -1
    );
  });
});
