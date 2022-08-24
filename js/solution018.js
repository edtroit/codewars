// https://www.codewars.com/kata/54ff3102c1bad923760001f3   (7 kyu) Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P.R.E.P.
//Parameters:
    // take in a string of all lower case letters
//Return:
     // Return the count of all vowels in the string
//Examples:
    // getCount('bud') Returns: 1
    // getCount('mmff') Returns: 0
    // getCount('abracadabra') Returns: 5
//Pseudo Code
    //1: take in a string parameter and set a variable for all the acceptable vowels aeiou into an array
    //2. set another variable equal to the parameter string split into another array
    //3. filter the string array by the vowel array to create a new array of just vowels
    //4. Check to see if the string array values are vowels by searching for their index value in the vowel arrary
    //5. indexOf() returns -1 if it does not match so set the filter to comparer if the indexOF the string array is not equal to -1
    //6. return the count of vowels by getting the length of the new array created by the filter


function getCount(str) {
    const vowels = ['a','e','i','o','u']
    const strArr = str.split('')
    const vowelCount = strArr.filter(char => vowels.indexOf(char) !== -1).length
    return vowelCount
  }

s