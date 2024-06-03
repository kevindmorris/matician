import simpleInterest from "./simpleInterest";

describe("simpleInterest", () => {
  test("should be NaN", () => {
    let obj = simpleInterest(-1000, 0.05, 2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = simpleInterest(1000, -0.05, 2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = simpleInterest(1000, 1.05, 2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = simpleInterest(1000, 0.05, 2.5);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();

    obj = simpleInterest(1000, 0.05, -2);
    expect(obj.A).toBeNaN();
    expect(obj.I).toBeNaN();
  });
  test("should calculate simple interest growth", () => {
    let obj = simpleInterest(1000, 0.05, 2);
    expect(obj.A).toBe(1100);
    expect(obj.I).toBe(100);

    obj = simpleInterest(5000, 0.0125, 5);
    expect(obj.A).toBe(5312.5);
    expect(obj.I).toBe(312.5);
  });
});
