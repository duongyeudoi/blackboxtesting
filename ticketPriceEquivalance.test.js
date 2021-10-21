const { expect } = require("@jest/globals");
const calculatePrice = require("./ticketPriceEquivalance");

test("Correct ticket price", () => {
  expect(calculatePrice(2, 7, 7)).toBe(40000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(2, 20, 7)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(2, 6, 7)).toBe(-1);
});
test("Correct ticket price", () => {
  expect(calculatePrice(2, 7, 50)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 20, 50)).toBe(80000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 6, 50)).toBe(-1);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 7, 110)).toBe(-1);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 21, 6)).toBe(-1);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 5, 7)).toBe(-1);
});
