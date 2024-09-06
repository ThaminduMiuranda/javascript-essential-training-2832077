import showTotals from "./taxes.js";

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
// Nested array of random prices
// const pricesArr = [
//   [2.5, 9.99, 3.99, 18.59, 49.96],
//   [2.99, 3.99, 4.99, 5.99, 6.99],
//   [100.99, 200.99, 300.99, 400.99, 500.99],
//   [1.99, -2.99, 3.99, -4.99, 5.99],
// ];

const pricesArr = [[2.5, 9.99, 3.99, 18.59, 49.96]];

// Pick random array of prices
// const randomPrices = Math.floor(Math.random() * pricesArr.length);

const result = showTotals(pricesArr[0]);

console.log(result);
