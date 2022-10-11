// https://www.codewars.com/kata/5264d2b162488dc400000001 6kyu

// Write a function that takes in a string of one or more words, and returns the same string, but
// with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.

//P.R.E.P.
//Parameters:
    // Take in a string that only contains letters and spaces
//Return:
    // Return back a string that is identical except any word whose lenght is greater than or equal to 5.
    // Any string over 5 should be reversed.
//Examples:
    // spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    // spinWords( "This is a test") => returns "This is a test" 
    // spinWords( "This is another test" )=> returns "This is rehtona test"

//Pseudo Code
    // Take in a string and split it by spaces to get an array of words from the string
    // assign the new array to a new variable
    // use the map function to iterrate over the array and to set up a parameter to find words greater than 5 in length
    // if word >= 5 than use the split method on the word by nothing to create an array of letters.
    // next use the reverse method to reverse the array and then use the join method to put the reversed letters back together
    // if word < 5  return the word.
    //finally use the join method to turn the array back into a string with a space as the join parameter.

function spinWords(string){
    newStr = string.split(' ').map(word => word.length>= 5 ? word.split('').reverse().join(''):word).join(' ')
    return newStr
  }

console.log(spinWords( "Hey fellow warriors"))
console.log(spinWords( "This is a test"))
console.log(spinWords( "This is another test"))