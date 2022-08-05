// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// This time no story, no theory. The examples below show you how to write function accum:

// The parameter of accum is a string which includes only letters from a..z and A..Z.

//P.R.E.P.
//Parameters:
    //Take in any string containing upper and lower letters only
//Return:
    //Return a string with every character from that string multiplied by it's place in the string. Each group of letters should start with
    //it's capital version and any others in the group (if any) should be lowercase. Finally these groups should be separated by a dash "-"
//Examples:
    // accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"
//Pseudo Code
    // We will need to iterate through the string as an array, so convert string to array
    // Get the letter value and index value of the first letter in the string
    // Add the letter value converted to uppercase to a new string variable
    // Repeat the letter value by its index value, convert it lower case, and add it to the new string
    // Add a dash to the new string if the current character is not the last
    // 

    function accum(s) {
        let sArr = s.split('')
        let str = ''
        sArr.forEach((char, i,) => {
          str += char.toUpperCase() + char.toLowerCase().repeat(i)
          if(sArr.length-1 != i){
            str += '-'
            }
         })
         return str
      }
    
    accum('a')
    accum('bv')
    accum('hey')
    accum('hello')
    accum("ZpglnRxqenU")

    // other solution 
    //function accum(s) {
    //     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
    //   }
  