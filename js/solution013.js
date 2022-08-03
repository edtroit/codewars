//https://www.codewars.com/kata/579387dc7cb7a1e592000112 7kyu

// In Pokemon Go, an easy way to increase your XP level is to evolve pokemon you've caught.
// Every time you catch a pokemon, you also receive some Candy. The Candy is limited to the pokemon type (eg. a Pidgey will give you Pidgey Candy) 
// and once you have enough, you can spend it to evolve a pokemon.
// To evolve a Pidgey costs 12 Pidgey Candy, but you'll be rewarded with 500 XP and 1 extra Pidgey Candy.
// Surplus Pidgeys can be transferred to Professor Willow in exchange for 1 Pidgey Candy - you won't get the Pidgey back.

// #Example
// If you have 2 Pidgeys and 23 Pidgey Candy, you can evolve 1 Pidgey for 12 Pidgey Candy. You have 11 Pidgey Candy left, but
// you received 1 Pidgey Candy for evolving the first Pidgey, making the 12 you need to evolve the 2nd. You will end up with 1000 XP.

// #Your job
// Create a function that will take 2 integers as arguments: a number of Pidgeys and an amount of Pidgey Candy.
// It should return the maximum XP gained from evolving the highest possible number of Pidgeys.
// Remember, you'll need to take into account the extra Pidgey Candy gained from transferring and evolving Pidgeys.

//PREP
//Parameters: Take in two integers. One to count Pidgeys and another for Pidgey Candies
//Return: Give back the highest possible XP gained from evovling pidgeys using a combination of Pidgeys and candies. Accounting for the
// extra 1 candy gained from evolving a pidgey. It takes 12 candies to evolve a pidgey and 500XP is gained per evolution.
//Examples: 
    // 1 pidgey and 0 candies = 0 XP
    // 0 pidgey and 100 candies = 0 XP
    // 1 pidgey and 12 candies = 500 XP
    // 3 pidgey and 34 candies = 1500 XP
    // 10 pidgey and 63 candies = 500 XP

//Pseudo Code:
    // 1. Figure out how many pidgy we can evolve. Divide candies by the 12 needed to evolve and round down. 
    // This will give us how many extra evolution candies we will get.
    // 2. Add extra evolution candies to original amount of candies and divide by 12 and round down again. 
    // This will tell us our max amount of pidgey we can evolve.
    // 3. Times the number of pidgey by 12. To get the total needed to evolve all pidgeys.
    // 4. Divide (max amount of pidgey we can evolve) by (total candies needed to evolve all pidgeys) and round down.
    // This number will be the max amount of pidgeys we can evolve
    // 5. Times the number of pidgey we can evolve by 500 to get the total XP 

//didn't work
    // function pidgeyCalc ( pidgeys, candy ) {
//     const EvolutionCandy = Math.floor(candy/12)
//     const totalCandy = candy+EvolutionCandy
//     const totalEvolutions = Math.floor(totalCandy/12)

//     if(totalEvolutions>=pidgeys){
//         const xp = pidgeys * 500
//         console.log(xp)
//         return xp
//     }else if(pidgeys % 12 > 0){
//         const pidgeyTradeCandy = Math.floor(pidgeys/12)
//         const newTotalCandy = pidgeyTradeCandy + totalEvolutions
//         const newTotalEvolutions = Math.floor(newTotalCandy/12)/pidgeys
//         const xp = newTotalEvolutions *500
//         console.log(xp)
//         return xp
//     }else{

//     }
//   }

function pidgeyCalc ( p, c ) {
    let x = Math.min(~~((c+p-1)/12),p)*500 
    return x
  }
  pidgeyCalc(3,34)

// pidgeyCalc(12,24)
// pidgeyCalc(0,0)
// pidgeyCalc(3,34)

// pidgeyCalc(1, 12)
// pidgeyCalc(13, 144)
// pidgeyCalc(10, 63)
// pidgeyCalc(1, 63)
pidgeyCalc(63, 1)
// pidgeyCalc(0, 0)

// 60 pidgey divide by 12 is enough to evolve 5 pidgey by getting trade in candy.
// 5 pidgey minus 1 (leaving at least one to evolve) is 4 pidgey.
// 4 pidgey

