export const decimalFloat = (floatNum, decimal) =>
  floatNum.toFixed(decimal).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1");
