https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// Summation - Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

//P.R.E.P.
//Parameters:
    //Take in an integer greater than 0 
//Return:
    //Return the sum of all the numbers between 1 and the parameter number 
//Examples:
    // summation(2) -> 3
    // 1 + 2

    // summation(8) -> 36
    // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
//Pseudo Code
    //1: Take in a number parameter and create a result variable set to 0
    //2: Create a loop that adds an incrementing variable to the result variable
    //3: Stop when the incrementing variable is equal to the number parameter
    //4: return result
    // or just use Gauss Summation

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        console.log("LOOP"+i+": result = "+ result+" , i = "+ i)
        result += i;
        console.log("add i to result and you get "+ result)
    }    
    return result;
  }

const gaussSummation = num => num*(num+1)/2;

    console.log(summation(3))
    console.log(gaussSummation(4))

