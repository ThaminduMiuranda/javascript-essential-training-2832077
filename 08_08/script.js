/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const formatter = (locale, curency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: curency,
  }).format(value);

  return formattedValue;
};

const tipCalculator = (locale, curency, sum, percentage) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatter(locale, curency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, curency, tip.toFixed(2))}
      Total:          ${formatter(locale, curency, total.toFixed(2))}
    `);
};

tipCalculator("en-LK", "LKR", 29.95, 18);
