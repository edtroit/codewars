// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// 8 kyu Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    const sumWithInitial = x.reduce(
      (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
      0
    );
      return sumWithInitial
    }