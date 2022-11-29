// 6 kyu String array duplicates

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
    return s.map(a => a.split('').filter((a,i,arr) => a != arr[i-1]).join(''))
  }
  
 // 1. use map to alter each string in the array
 // 2. use filter to include letters that do not equal the one before it
 // 3. use join to put the string back together but now with the repetitive characters now gone.

