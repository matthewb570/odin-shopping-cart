export default class NumberUtils {
  static formatAsDollars(number) {
    if (number === undefined || number === null || typeof number !== "number") {
      return number;
    }

    const formatter = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(number);
  }
}
