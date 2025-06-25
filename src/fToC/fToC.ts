/**
 * Converts Fahrenheit to Celsius.
 */
export default function fToC(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}
