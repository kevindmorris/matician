import factorial from "../factorial";

/**
 * A discrete probability distribution that represents the likelihood of `x` events occurring in a fixed interval of time if these events occur with a known constant mean rate and independently of the time since the last event.
 * @since 1.0.0
 * @param {number} lambda The expected number of events in a given time period.
 * @param {number} x The number of events in a time period.
 * @returns {number} Returns the probability of `x` events in a time period.
 */
export default function poisson(lambda: number, x: number): number {
  if (!Number.isInteger(x) || lambda < 0 || x < 0) return NaN;

  return (Math.exp(-lambda) * Math.pow(lambda, x)) / factorial(x);
}
