import { describe, test, it, expect } from "vitest";
import { average, factorial, fizzBuzz, max } from "../intro";

describe("max", () => {
  it("should return first arguement", () => {
    /* AAA
    >>Arange
    const number1 = 2;
    const number2 = 1;
    >>Act
    const result = max(number1, number2);
    >>Assert
    expect(result).toBe(number1); */
    expect(max(2, 1)).toBe(2);
  });
  //second arguement
  it("should return second arguement", () => {
    expect(max(2, 4)).toBe(4);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return number as string", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});

describe("average", () => {
  it("should return NaN if the number is Empty", () => {
    expect(average([])).toBe(NaN);
  });
  it("should return with the average of numbers", () => {
    expect(average([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return NaN if the number is Empty", () => {
    expect(factorial()).toBe(NaN);
  });
  it("should return with undifined with negative number", () => {
    expect(factorial(-1)).toBe(undefined);
  });
  it("should return with 1 if the number is 0", () => {
    expect(factorial(0)).toBe(1);
  });
  it("should return factorial of the number 4 as 24", () => {
    expect(factorial(4)).toBe(24);
  });
});
