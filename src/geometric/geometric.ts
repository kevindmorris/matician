/**
 * A discrete probability distribution that represents the likelihood of a success on the `k`th trial, each with a probability of success `p`.
 * @since 1.0.0
 * @param {number} k The number of trials.
 * @param {number} p The probability of a success.
 * @returns {number} Returns the probability of observing the firth success on the `k`th trial.
 */
export default function geometric(k: number, p: number): number {
  if (!Number.isInteger(k) || k < 1 || p < 0 || p > 1) return NaN;

  return p * Math.pow(1 - p, k - 1);
}
