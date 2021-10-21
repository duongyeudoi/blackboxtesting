const { expect } = require("@jest/globals");
const calculatePrice = require("./ticketPrice");

test("Correct ticket price", () => {
  expect(calculatePrice(2, 15, 50)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(3, 15, 50)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(7, 15, 50)).toBe(80000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(8, 15, 50)).toBe(80000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 7, 50)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 8, 50)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 22, 50)).toBe(80000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 23, 50)).toBe(80000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 15, 6)).toBe(40000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 15, 7)).toBe(40000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 15, 99)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 15, 100)).toBe(60000);
});
test("Correct ticket price", () => {
  expect(calculatePrice(5, 15, 50)).toBe(60000);
});
