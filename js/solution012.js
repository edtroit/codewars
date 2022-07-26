//https://www.codewars.com/kata/55908aad6620c066bc00002a 7kyu
//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.

//PREP
//Parameters: Take in a single 'case insensitive string'
//Return: True if the string contains an equal amount of x's and o's. Zero of each is also an equal amount. Anything other circumstance is false
// Examples:
//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false
//Pseudo Code: Take in string and turn to lowercase to strip case sensitivity. 
//Create two arrays for x and o and filter by their respective characters. Compare lengths of the two arrays and return result

function XO(str) {
    //convert string to array and turn to lowercase to strip case sensitivity
    const strLowerArr = Array.from(str.toLowerCase())
    //filter new array by x and o store length in new variables
    const xArr = strLowerArr.filter(letter => letter == "x").length
    const yArr = strLowerArr.filter(letter => letter == "o").length
    //check to see if new variables equal each other
    return xArr == yArr
}