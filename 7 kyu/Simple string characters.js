// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]
// More examples in the test cases.

function solve(s) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let numberCount = 0;
  let specialCount = 0;

  for (const char of s) {
    if (/[A-Z]/.test(char)) {
      // Count uppercase letters
      uppercaseCount++;
    } else if (/[a-z]/.test(char)) {
      // Count lowercase letters
      lowercaseCount++;
    } else if (/[0-9]/.test(char)) {
      // Count numbers
      numberCount++;
    } else {
      // Count special characters
      specialCount++;
    }
  }

  return [uppercaseCount, lowercaseCount, numberCount, specialCount];
}

console.log(
  solve(
    "LKSDJFJklfksldjsokjfkJIJSjfioJEiiwrir9021u439827438ryeiuiwohjkdsdkvnklf"
  )
);
