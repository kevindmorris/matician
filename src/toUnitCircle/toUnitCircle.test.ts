import toUnitCircle from "./toUnitCircle";

describe("toUnitCircle", () => {
  it("returns [1, 0] for 0 degrees", () => {
    expect(toUnitCircle(0)).toEqual([1, 0]);
  });

  it("returns [0, 1] for 90 degrees", () => {
    const [x, y] = toUnitCircle(90);
    expect(x).toBeCloseTo(0);
    expect(y).toBeCloseTo(1);
  });

  it("returns [-1, 0] for 180 degrees", () => {
    const [x, y] = toUnitCircle(180);
    expect(x).toBeCloseTo(-1);
    expect(y).toBeCloseTo(0);
  });

  it("returns [0, -1] for 270 degrees", () => {
    const [x, y] = toUnitCircle(270);
    expect(x).toBeCloseTo(0);
    expect(y).toBeCloseTo(-1);
  });

  it("returns [1, 0] for 360 degrees", () => {
    const [x, y] = toUnitCircle(360);
    expect(x).toBeCloseTo(1);
    expect(y).toBeCloseTo(0);
  });

  it("handles negative angles correctly", () => {
    const [x, y] = toUnitCircle(-90);
    expect(x).toBeCloseTo(0);
    expect(y).toBeCloseTo(-1);
  });
});
