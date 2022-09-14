https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// Write a function that takes an array of numbers and returns the sum of the numbers
// The numbers can be negative or non-integer
// If the array does not contain any numbers then you should return 0


//P.R.E.P.

//Parameters:
    //Take in an array of numbers that can be negative or non-integer 
//Return:
    //Return the sum of all the numbers in the array or 0 if none exsist
//Examples:
    // Input: [1, 5.2, 4, 0, -1]
    // Output: 9.2
    // 
    // Input: []
    // Output: 0
    // 
    // Input: [-2.398]
    // Output: -2.398
//Pseudo Code
    //1: Create a function that takes an array as the parameter
    //2: Use the built in JS reduce array method to add all the values together
    //3: be sure to set the initial value to 0 to account for empty arrays
    //4: return the sum result from this function

// Sum Numbers

function sum (numsArr) {
    return numsArr.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0);   
    };

let arr1 = []



console.log(sum(arr1))