/**
 * Calculates the Net Present Value (NPV) of a series of cash flows.
 *
 * @param rate - The discount rate per period (as a decimal, e.g., 0.05 for 5%).
 * @param cashFlows - An array of numbers representing cash flows, where each index is the period.
 * @returns The net present value.
 */
export default function netPresentValue(rate: number, cashFlows: number[]): number {
  return cashFlows.reduce((acc, cf, t) => acc + cf / Math.pow(1 + rate, t), 0);
}
