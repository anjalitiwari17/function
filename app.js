// 12/05/2023



// 1.

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(checkEvenOrOdd (4)); // Output: "Even"
// console.log(checkEvenOrOdd(7)); // Output: "Odd"



// 2.


// function findLargerNumber(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }


// console.log(findLargerNumber(5, 10)); // Output: 10
// console.log(findLargerNumber(20, 8)); // Output: 20



// 3.

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; // Leap year
//     } else {
//         return false; // Not a leap year
//     }
// }


// console.log(isLeapYear(2020)); // Output: true
// console.log(isLeapYear(2021)); // Output: false



// 4

// function isVowelOrConsonant(character) {

//     character = character.toLowerCase();

//     const vowels =['a', 'e', 'i', 'o', 'u'];

    
//     if (vowels.includes(character)) {
//         return "Vowel";
//     } else {
    
//         if ((character >= 'a' && character <= 'z')) {
//             return "Consonant";
//         } else {
//             return "Not a letter";
//         }
//     }
// }


// console.log(isVowelOrConsonant('a')); // Output: "Vowel"
// console.log(isVowelOrConsonant('b')); // Output: "Consonant"
// console.log(isVowelOrConsonant('1')); // Output: "Not a letter"


// 5

// function findLargestNumber(num1, num2, num3) {
    
//     let largest = num1;
//     if (num2 > largest) {
//         largest = num2;
//     }
//     if (num3 > largest) {
//         largest = num3;
//     }
//     return largest;
// }

// console.log(findLargestNumber(1,2,3)); // Output: 3
// console.log(findLargestNumber(3,2,1)); // Output: 3
// console.log(findLargestNumber(2,3,1)); // Output: 3


// 6.
// function checkNumber(number) {
//     if (number === 0) {
//         return "Zero";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Positive";
//     }
// }


// console.log(checkNumber(0)); // Output: "Zero"
// console.log(checkNumber(-1)); // Output: "Negative"
// console.log(checkNumber(9)); // Output: "positive"


// 7.


// function checkEligibilityToVote(age) {
//     if (age >= 18) {
//         return "Eligible to vote";
//     } else {
//         return "Not eligible to vote";
//     }
// }


// console.log(checkEligibilityToVote(20)); // Output: "Eligible to vote"
// console.log(checkEligibilityToVote(16)); // Output: "Not eligible to vote"



// 8.
// function calculateGrade(marks) {
//     if (marks >= 90) {
//         return "A";
//     } else if (marks >= 80) {
//         return "B";
//     } else if (marks >= 70) {
//         return "C";
//     } else if (marks >= 60) {
//         return "D";
//     } else if (marks >= 50) {
//         return "E";
//     } else {
//         return "F";
//     }
// }


// console.log(calculateGrade(95)); // Output: "A"
// console.log(calculateGrade(85)); // Output: "B"
// console.log(calculateGrade(75)); // Output: "C"
// console.log(calculateGrade(65)); // Output: "D"
// console.log(calculateGrade(55)); // Output: "E"
// console.log(calculateGrade(45)); // Output: "F"


// 9.
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Reverse the string and compare with the original
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// // Example usage:
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

// 10.
// function triangleType(side1, side2, side3) {
//     // Check if the given sides form a valid triangle
//     if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//         // Check for equilateral triangle
//         if (side1 === side2 && side2 === side3) {
//             return "Equilateral triangle";
//         }
//         // Check for isosceles triangle
//         else if (side1 === side2 || side1 === side3 || side2 === side3) {
//             return "Isosceles triangle";
//         }
//         // Otherwise, it's a scalene triangle
//         else {
//             return "Scalene triangle";
//         }
//     } else {
//         return "Not a valid triangle";
//     }
// }

// // Example usage:
// console.log(triangleType(5, 5, 5)); // Output: "Equilateral triangle"
// console.log(triangleType(3, 4, 4)); // Output: "Isosceles triangle"
// console.log(triangleType(6, 8, 10)); // Output: "Scalene triangle"
// console.log(triangleType(1, 2, 4)); // Output: "Not a valid triangle"

// 11
// function sortNonDecreasing(arr) {
//     return arr.slice().sort(function(a, b) {
//         return a - b;
//     });
// }

// // Example usage:
// const array = [5, 2, 8, 1, 3];
// console.log(sortNonDecreasing(array)); // Output: [1, 2, 3, 5, 8]
// console.log(array); // Original array remains unchanged


// 12.
// function findMinElement(arr) {
//     if (arr.length === 0) {
//         return "Array is empty";
//     }

//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// const array = [5, 2, 8, 1, 3];
// console.log(findMinElement(array)); // Output: 1

// 13.
// function findMaxElement(arr) {
//     if (arr.length === 0) {
//         return "Array is empty";
//     }

//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }


// const array = [5, 2, 8, 1, 3];
// console.log(findMaxElement(array)); // Output: 8


// 14.
// function findArraySum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }


// const array = [5, 2, 8, 1, 3];
// console.log(findArraySum(array)); // Output: 19

// 15.
// function findArrayAverage(arr) {
//     if (arr.length === 0) {
//         return "Array is empty";
//     }

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }


// const array = [5, 2, 8, 1, 3];
// console.log(findArrayAverage(array)); // Output: 3.8




