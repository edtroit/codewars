//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
//PREP
//Parameters: takes in a boolean value
//Return: returns string "Yes" if true and "No" if false
//Examples: 1 === 1 return "Yes", 2 > 10 return "No"
//Pseudo Code: take boolean and check to see if it's value is true, return yes string if true and no string if not

function boolToWord( bool ){
    if(bool === true){
        return "Yes"
    }else{
        return "No"
    }
  }