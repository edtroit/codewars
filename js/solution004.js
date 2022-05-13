//PREP
//kata url: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript?collection=fundamentals-8-kyu-easiest
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

//Parameters: full name (first last) string 

//Return: string console capitalInitial1.capitalInitial

//Examples: 'ed smith' returns 'E.S', 'j michael' returns 'J.M'

/*Psuedo Code: 
take string name,
find first character for first name starting letter
find index of space and add one to get second name starting letter
capitalize each result and combine together into a string with a period in the middle
*/

function abbrevName(name){
    let firstInitial = name.charAt(0).toUpperCase()
    let secondInitial = name.charAt(name.indexOf(' ') + 1).toUpperCase()
    console.log(`${firstInitial}.${secondInitial}`)
    return `${firstInitial}.${secondInitial}`
}

abbrevName('eduardo coronado')

