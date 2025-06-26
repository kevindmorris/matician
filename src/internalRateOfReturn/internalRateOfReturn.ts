/**
 * Calculates the Internal Rate of Return (IRR) for a series of cash flows.
 * Uses the Newton-Raphson method.
 *
 * @param cashFlows - An array of numbers representing cash flows, where index is the time period.
 * @param guess - Optional initial guess for the IRR (default is 0.1 or 10%).
 * @returns The estimated IRR as a decimal.
 * @throws If the IRR does not converge after a set number of iterations.
 */
export default function internalRateOfReturn(cashFlows: number[], guess = 0.1): number {
  const maxIterations = 1000;
  const tolerance = 1e-7;
  let rate = guess;

  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let derivative = 0;

    for (let t = 0; t < cashFlows.length; t++) {
      const cf = cashFlows[t];
      npv += cf / Math.pow(1 + rate, t);
      derivative -= t * cf / Math.pow(1 + rate, t + 1);
    }

    const newRate = rate - npv / derivative;

    if (Math.abs(newRate - rate) < tolerance) {
      return newRate;
    }

    rate = newRate;
  }

  throw new Error("IRR did not converge");
}
