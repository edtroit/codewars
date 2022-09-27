// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// Complete the solution so that it reverses the string passed into it. 8kyu

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//1. split the string into an arry with the split method
//2. reverse the array with the reverse method
//3. convert array back into a string with the join method.


function solution(str){
 return str.split('').reverse().join('')
}