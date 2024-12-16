// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;
console.log(`The sum of n1, n2, n3 and n4 is ${isSum50}.`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(
  `After using the modulus operator "%" to test if n1, n2, n3 or n4 is odd the results came back ${isTwoOdd}.`
);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(
  `After using the OR operator "||" to see if n1, n2, n3 or n4 is greater than 25 the results came back ${isOver25}.`
);

//==================================================================================//
// Change the way that isOver25 calculates so that we do not need to use the NOT
// operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(
  `After changing if the n1, n2, n3, and n4 was greater than 25 to checking if those values was less thank 25 the results came back ${isUnder25}.`
);

//==================================================================================//

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(
  `After checking to see if n1, n2, n3, and n4 were all unique numbers the results came back ${isUnique}.`
);

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(
  `After testing isSum50, isTwoOdd, isUnder25 and isUnique the results came back ${isValid}.`
);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;
console.log(
  `Here is the results from doing all of the operation together, ${dontDoThis}.`
);
//==================================================================================//

//==================================================================================//
// Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(
  `The result after checking if all numbers are divisible by 5 is ${isDivisibleBy5}.`
);
//==================================================================================//

//==================================================================================//
// Check if the first number is larger than the last. Cache the result in a variable.
const n1LargerThanN4 = n1 > n4;
console.log(
  `The result after checking if the first number is larger than the last is ${n1LargerThanN4}.`
);
//==================================================================================//

//==================================================================================//
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const arithmeticChain = ((n2 - n1) * n3) / n4;
console.log(
  `The result after subtract the first number from the second number, Multiply the result by the third number and finding the remainder by dividing the result by the fourth number is ${arithmeticChain}.`
);
//==================================================================================//
