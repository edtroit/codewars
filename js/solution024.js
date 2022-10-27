// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001 6kyu

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//P.R.E.P.
//Parameters:
    //take in a string
//Return:
    //return an array with pairs and if the string is odd add an underscore to the last character
//Examples:
solution("abcdef"), ["ab", "cd", "ef"]
solution("abcdefg"), ["ab", "cd", "ef", "g_"]
solution(""), []
//Pseudo Code
// declare a new array to store the new value pairs.
// for each even index push it and the next index to a new array. Then increment by 2 to get the next pair.
// stop looping one shy of the entire length to avoid pushing the last valur with an undefined value.
// check to see if the array length is odd and if it is push the last value with an underscore.
// return the new array

function solution(str){
let arr = [];
for (var i = 0; i < str.length-1; i += 2){
    arr.push(str[i]+str[i+1])
}
if(str.length%2 > 0){
    arr.push(str.slice(-1)+"_")
}
console.log(arr)
}