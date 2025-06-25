import milesToKm from "./milesToKm";

describe("milesToKm", () => {
  it("converts 0 miles correctly", () => {
    expect(milesToKm(0)).toBeCloseTo(0);
  });

  it("converts 1 mile to kilometers", () => {
    expect(milesToKm(1)).toBeCloseTo(1.60934);
  });

  it("converts multiple miles", () => {
    expect(milesToKm(5)).toBeCloseTo(8.0467);
    expect(milesToKm(10)).toBeCloseTo(16.0934);
  });

  it("handles fractional miles", () => {
    expect(milesToKm(0.5)).toBeCloseTo(0.80467);
  });

  it("handles negative values", () => {
    expect(milesToKm(-1)).toBeCloseTo(-1.60934);
  });
});
