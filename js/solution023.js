// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9 7kyu

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//P.R.E.P.
//Parameters:
    //take in a non empty string
//Return:
    //return back the shortest word length out of the string of words
//Examples:
    //"Let's travel abroad shall we" 2 is the shortest length of the word we
//Pseudo Code
    // take in a string convert and split it into an array by spaces with the split method
    // use the map method to create a new array of lengths
    // use the math.min() on the new array to find the smallest value


function findShort(s){
    return Math.min(...s.split(' ').map(a => a.length))
}