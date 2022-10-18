//https://www.codewars.com/kata/52fba66badcd10859f00097e 7kyu

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
    const vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y']
    const strArr = str.split('')
    const consonantStr = strArr.filter(char => !vowels.includes(char)).join("")
    return consonantStr
  }

//   console.log(disemvowel("This website is for losers LOL!"))  //Ths wbst s fr lsrs LL!
//   console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) //N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
//   console.log(disemvowel("Wh //are you, a communist?")) //Wht r y,  cmmnst?