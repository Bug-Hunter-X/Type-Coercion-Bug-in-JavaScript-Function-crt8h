function myFunction(a, b) {
  // Type checking and conversion
  const numA = Number(a);
  const numB = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(numA) || isNaN(numB)) {
    return "Invalid input: Arguments must be numbers";
  }

  return numA + numB; // Numerical addition
}

console.log(myFunction(5, "5")); // Output: 10
console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction("abc", 5)); // Output: Invalid input: Arguments must be numbers