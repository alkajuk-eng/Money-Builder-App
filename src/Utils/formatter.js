// Create a number formatter for currency values
export const formater = new Intl.NumberFormat("en-GB", {
  // Format the number as a currency
  style: "currency",
  // Use British Pounds
  currency: "GBP",
  // Don't show decimal places
  minimumFractionDigits: 0,
  // Don't show more than 0 decimal places
  maximumFractionDigits: 0
});