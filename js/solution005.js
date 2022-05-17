//PREP
//kata url: https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

//Parameters: an array

//Return: list in index reverse order

//Examples: 
// [1, 2, 3, 4]  -> [4, 3, 2, 1]  
// [9, 2, 0, 7]  -> [7, 0, 2, 9]

/*Psuedo Code: Get array, find array lenght, create new array adding in array indexes backwards */

function reverseList(list){
    rl = []
    list.slice().forEach(x => rl.unshift(x))
    // console.log(rl)
    return rl
}
let y =['j',4,'d',32,2,3,]
reverseList(y)