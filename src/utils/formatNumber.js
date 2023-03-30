import numeral from "numeral";

export function fShortenNumber(number) {
  return numeral(number).format("0.00a").replace(".00", "");
}
