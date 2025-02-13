(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
  function max(num1, num2) {
    // Returns the largest number.
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
    function maxOfThree(num1, num2, num3) {
      // Adds everything to a list.
      const nums = [num1, num2, num3];

      // Sorts the list.
      nums.sort();

      // Returns the end of the list, which should be the max.
      return nums[2];
    }

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  function isVowel(char) {
    // Returns -1 if the index being checked is not in this string.
    // Right below the checked answer https://stackoverflow.com/questions/26926994/javascript-check-if-character-is-a-vowel
    return ("aeiouAEIOU".indexOf(char) !== -1);
  }


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  function rovarspraket(string) {
    let newString = "";

    for (var i = 0; i < string.length; i++) {
      // Checks for spaces and vowels.
      // If there are not vowels then it adds the current vowel
      if (string[i] !== " " && "aeiouAEIOU".indexOf(string[i]) === -1) {
          // This was my own idea.
          newString += string[i] + "o" + string[i];
      } else {
        newString += string[i];
      }
    }
    return newString;
  }
  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(array) {
    // The final value.
    let sum = 0;

    for (var i = 0; i < array.length; i++) {
      // adds the array at the currnet position to sum.
      sum += array[i];
    }

    return sum;
  }

  function multiply(array) {
    let total = 1;
    // Multiplies every nuber in the array being passed.
    for (var i = 0; i < array.length; i++) {
      total *= array[i];
    }
    return total;
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverse(string) {
    // Turns the string into an array.
    const split = string.split("");
    // reverses the array.
    const reverse = split.reverse();
    // turns the array back into a string.
    // Was going to do this, but couldn't remember how to split/join strings/arrays.
    // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    const reversedString = reverse.join("");

    return reversedString;
  }


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  function findLongestWord(stringArr) {
    let longestWord = 0;
    // Loops through the arrqy and checks each length againt the longest word.
    //  When it finds the longest length it sets the longet word length to the words
    //  at that position.
    // slightly modified from a SO question that was lookging for the word, not the length.
    for (var i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length > longestWord) {
        longestWord = stringArr[i].length;
      }
    }
    return longestWord;
  }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  function filterLongWords(words, number) {
    const longestWords = [];
    // Loops through the array and pushes the
    // words longer than the value of number.
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > number) {
        longestWords.push(words[i])
      }
    }
    return longestWords;
  }


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(chars) {
    //From the class example.
    const freqList = {};
    const stringArray = chars.split("");

    for (let i = 0; i < stringArray.length; i++) {
      freqList[stringArray[i]] = freqList[stringArray[i]] + 1 || 1;
    }

    return freqList;
  }

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
