// https://www.codewars.com/kata/554b4ac871d6813a03000035

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//P.R.E.P.
//Parameters: a function that takes in a list of space separated numbers in string
//Return: Need to return the highest and lowest number within the list
//Examples:
    // highAndLow("1 2 3 4 5");  // return "5 1"
    // highAndLow("1 2 -3 4 5"); // return "5 -3"
    // highAndLow("1 9 3 4 -5"); // return "9 -5"
//Pseudo Code:
    //1. Need to get just an array of numbers so remove spaces. Use split(' ') to get rid of spaces and get an array of numbers
    //2. Find the highest number in the array use Math.mas() method
    //3. Find the lowest number in the array use Math.mas() method
    //4. return highest and lowest numbers as a string separated by a space

function highAndLow(numbers){
    let numbArr = numbers.split(' ')
    let highest = Math.max(...numbArr)
    let lowest = Math.min(...numbArr)
    console.log(highest, lowest)
    return `${highest} ${lowest}`
}

    highAndLow("1 2 3 4 .5");  // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
    highAndLow(" -5 "); // return "9 -5"
    highAndLow("0 "); // return "0 0"
    highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")// retturn "42 -9"