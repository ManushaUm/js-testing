import { it, expect, describe, beforeEach } from "vitest";
import {
  calculateDiscount,
  canDrive,
  fetchData,
  getCoupons,
  isPriceInRange,
  isValidUsername,
  validateUserInput,
} from "../core";

describe("getCoupons", () => {
  it("should return an array of coupons", () => {
    expect(getCoupons()).toBeInstanceOf(Array);
  });
});

describe("calculateDiscount", () => {
  it("should return Invalid price if price is not a number", () => {
    expect(calculateDiscount("price", "SAVE10")).toMatch(/Invalid/i);
  });
  it("should return Invalid discount code if discount code is not a string", () => {
    expect(calculateDiscount("120", 10)).toMatch(/Invalid/i);
  });
  it("should return invalid price if price is negative", () => {
    expect(calculateDiscount(-100, "SAVE10")).toMatch(/Invalid/i);
  });

  it("should rturn the discounted price", () => {
    expect(calculateDiscount(100, "SAVE10")).toBe(90);
    expect(calculateDiscount(100, "SAVE20")).toBe(80);
  });
});

//positive and negative test
describe("validateUserInput", () => {
  it("should return Invalid username if username is not a string", () => {
    expect(validateUserInput(1568, 20)).toBe("Invalid username");
  });
  it("should return Invalid age if age is not a number", () => {
    expect(validateUserInput("username", "age")).toBe("Invalid age");
  });
  it("should return Invalid age if age is less than 18", () => {
    expect(validateUserInput("username", 17)).toBe("Invalid age");
  });
  it("should return Validation successful if username and age are valid", () => {
    expect(validateUserInput("Manusha Umayanga", 24)).toBe(
      "Validation successful"
    );
  });
});
//Boundary testing : Lesson
describe("isPriceInRange", () => {
  //create the scenario
  it.each([
    { scenario: "price < min", price: -10, result: false },
    { scenario: "price = min", price: 0, result: true },
    { scenario: "max >price > min", price: 10, result: true },
    { scenario: "price = max", price: 100, result: true },
    { scenario: "price > max", price: 1000, result: false },
  ])(`should return $result if $scenario`, ({ price, result }) => {
    expect(isPriceInRange(price, 0, 100)).toBe(result);
  });
  //Boundary testing : Exercise
  describe("isValidUsername", () => {
    //conditions
    const minLength = 5;
    const maxLength = 15;

    it("should return false if username is too short", () => {
      expect(isValidUsername("a".repeat(minLength - 1))).toBe(false);
    });

    it("should return false if username is too long", () => {
      expect(isValidUsername("a".repeat(maxLength + 1))).toBe(false);
    });

    it("should return true if username is at the min or max length", () => {
      expect(isValidUsername("a".repeat(minLength))).toBe(true);
      expect(isValidUsername("a".repeat(maxLength))).toBe(true);
    });

    it("should return true if username is within the length constraint", () => {
      expect(isValidUsername("a".repeat(minLength + 1))).toBe(true);
      expect(isValidUsername("a".repeat(maxLength - 1))).toBe(true);
    });

    it("should return false for invalid input types", () => {
      expect(isValidUsername(null)).toBe(false);
      expect(isValidUsername(undefined)).toBe(false);
      expect(isValidUsername(1)).toBe(false);
    });
  });

  describe("canDrive", () => {
    it("should return Invalid country code if country code not valid", () => {
      expect(canDrive(18, "LK")).toBe("Invalid country code");
    });
    it.each([
      {
        scenario: "age < legal age",
        age: 15,
        countryCode: "US",
        result: false,
      },
      { scenario: "age = legal age", age: 16, countryCode: "US", result: true },
      { scenario: "age > legal age", age: 17, countryCode: "US", result: true },
    ])("should return $result if $scenario", ({ age, countryCode, result }) => {
      expect(canDrive(age, countryCode)).toBe(result);
    });
  });

  describe("fetchData", () => {
    it("should return data", async () => {
      try {
        await fetchData();
      } catch (error) {
        expect(error).toHaveProperty("reason");
        expect(error.reason).toMatch(/fail/i);
      }
    });
  });
});
