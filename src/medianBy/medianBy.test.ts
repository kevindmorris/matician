import medianBy from "./medianBy";

describe("medianBy module", () => {
  test("should find the mean of an array", () => {
    expect(medianBy([], (o) => o)).toBe(0);
    expect(medianBy([2, 4, 6, 8], (o) => o)).toBe(5);
    expect(medianBy([{ x: 2 }, { x: 4 }, { x: 6 }, { x: 8 }], (o) => o.x)).toBe(
      5
    );
    expect(medianBy([2, -4, 6, -8], (o) => o)).toBe(-1);
    expect(
      medianBy([{ x: 2 }, { x: -4 }, { x: 6 }, { x: -8 }], (o) => o.x)
    ).toBe(-1);
  });
});
