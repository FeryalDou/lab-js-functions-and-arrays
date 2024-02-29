// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length === 0) {
    return 0;
  }
  let longestWord = "";
  for (const element of words)
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  return longestWord;
}
findLongestWord(words);

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length === 1) {
    return numbers[0];
  }
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  let sum = 0;
  if (numbers2.length === 0) {
    return 0;
  } else if (numbers2.length === 1) {
    return numbers2[0];
  }
  sum = sumNumbers(numbers2);
  return sum / numbers2.length;
}
averageNumbers(numbers2);

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordArr, searchWords) {
  if (wordArr.length === 0) {
    return null;
  }
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === searchWords) {
      return true;
    }
  }
  return false;
}
