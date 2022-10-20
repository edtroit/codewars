// https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript 8kyu

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


let errOne = [19,7,13,14,3,4,4,15,12,15,2,4,5,7,10,12,6]
console.log(errOne.reduce((a,b) =>a+b,0)/errOne.length)

let errTwo = [1,5,87,45,8,8]
console.log(errTwo.reduce((a,b) =>a+b,0)/errTwo.length)

function getAverage(marks){
    const avg = Math.floor(marks.reduce((a,b) =>a+b,0)/marks.length)
    console.log(avg)
    return avg
    
  }



console.log(getAverage([2,2,2,2]) === 2)
console.log(getAverage([1,2,3,4,5,]) === 3)
console.log(getAverage([1,1,1,1,1,1,1,2]) === 1)

console.log(getAverage([1,5,87,45,8,8]) === 25)

console.log(getAverage([19,7,13,14,3,4,4,15,12,15,2,4,5,7,10,12,6]) === 8)