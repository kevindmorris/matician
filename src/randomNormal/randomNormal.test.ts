import randomNormal from "./randomNormal";

describe("randomNormal", () => {
  it("returns roughly normal results with many samples", () => {
    const samples = Array.from({ length: 10000 }, () => randomNormal(0, 1));
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    expect(Math.abs(avg)).toBeLessThan(0.1);
  });
});
