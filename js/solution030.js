//https://www.codewars.com/kata/5b901127d0093853470001e7/
// 6kyu Most consecutive 0's in a row [Code-golf]6
let m = 10002030000

// let nStr = n.toString()

console.log(m+''.split(/[1-9]/))

// f=i=>Math.max(...i.toString().split(/[1-9]/).map(a=>a.length))

f=i=>Math.max(...i+''.split(/[1-9]/).map(a=>a.length))
console.log(f(m))

// f=n=>Math.max(...n.toString().split('').map(a=>a>0?a/a:a).join('').split('1').map(a=>a.length))



// s=n=>Math.max(...n.split('').map(a=>!0?a/a).join('').split('1').map(a=>a.length))

console.log("f=i=>Math.max(...i+''.split(/[1-9]/).map(a=>a.length))".length)
