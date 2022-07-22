//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//PREP
//Parameters: takes two strings
//Return: returns true if the last characters of the first parameter end with the characters of the second parameter
//Examples: param1 = 'hey' param2 = 'ey' return true becasue the last characters of first param contain the second param 'ey'
//Pseudo Code: find the length of the second string, take this length and take that many characters off the end of the first param.
//see if the sliced character from the first string match the second string param.
function solution(str, ending){
    //find the length of the second string,
    endLength = ending.length
    console.log(endLength)
    //take this length and take that many characters off the end of the first param
    strEnd = str.slice(endLength*-1)
    console.log(strEnd)
    //see if the sliced character from the first string match the second string param.
    return strEnd == ending
  }