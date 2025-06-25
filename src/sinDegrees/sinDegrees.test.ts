import sinDegrees from "./sinDegrees";

describe("sinDegrees", () => {
  it("returns 0 for 0 degrees", () => {
    expect(sinDegrees(0)).toBeCloseTo(0);
  });

  it("returns 1 for 90 degrees", () => {
    expect(sinDegrees(90)).toBeCloseTo(1);
  });

  it("returns 0 for 180 degrees", () => {
    expect(sinDegrees(180)).toBeCloseTo(0);
  });

  it("returns -1 for 270 degrees", () => {
    expect(sinDegrees(270)).toBeCloseTo(-1);
  });

  it("returns 0 for 360 degrees", () => {
    expect(sinDegrees(360)).toBeCloseTo(0);
  });

  it("handles negative angles", () => {
    expect(sinDegrees(-90)).toBeCloseTo(-1);
  });

  it("handles angles greater than 360", () => {
    expect(sinDegrees(450)).toBeCloseTo(1); // Equivalent to 90°
  });

  it("returns expected values for common angles", () => {
    expect(sinDegrees(30)).toBeCloseTo(0.5);
    expect(sinDegrees(45)).toBeCloseTo(Math.SQRT1_2); // √2/2
    expect(sinDegrees(60)).toBeCloseTo(Math.sqrt(3) / 2);
  });
});
