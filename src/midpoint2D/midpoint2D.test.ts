import midpoint2D from "./midpoint2D";

describe("midpoint2D", () => {
  it("returns the correct midpoint between two positive points", () => {
    expect(midpoint2D(0, 0, 2, 2)).toEqual([1, 1]);
    expect(midpoint2D(1, 3, 5, 7)).toEqual([3, 5]);
  });

  it("returns correct result for mixed positive and negative coordinates", () => {
    expect(midpoint2D(-2, 2, 2, -2)).toEqual([0, 0]);
  });

  it("returns correct result when both points are the same", () => {
    expect(midpoint2D(5, 5, 5, 5)).toEqual([5, 5]);
  });

  it("handles decimals correctly", () => {
    expect(midpoint2D(1.5, 2.5, 3.5, 4.5)).toEqual([2.5, 3.5]);
  });
});
