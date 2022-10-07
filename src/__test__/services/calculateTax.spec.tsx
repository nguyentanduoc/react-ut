import calculateTax from "../../services/calculateTax";

describe("Calculator Tax", () => {
  test("10% of 10 return 10.1", () => {
    const result = calculateTax(10);
    expect(result).toBe(10.1);
  });

  test("10% of 20 return 20.2", () => {
    const result = calculateTax(20);
    expect(result).toBe(20.2);
  });
});
// https://www.softwaretestinghelp.com/jest-testing-tutorial/
