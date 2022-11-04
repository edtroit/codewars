// https://www.codewars.com/kata/5829c2c8ef8d4474300000fa 6 kyu  https://www.codewars.com/kata/5829c2c8ef8d4474300000fa/train/javascript

// Triple Sorting - Sort & Stringify a list by 3 attributes

// DESCRIPTION:
// Tale University is a bit messy, and can't maintain an ordered list of their student. Tale's dean wants to print
// a sortet list of his students by the gpa, last name and age and post it on the walls so everybody can be impressed of his great students.

// Given a list of students, sort them by (from most important to least important):

// GPA (descending)
// First letter of last name (ascending)
// Age (ascending)
// And the class Student:

// class Student {
//   constructor(age, gpa, fullName) {
//     this.age = age;
//     this.gpa = gpa;
//     this.fullName = fullName;
//   };
// };
// Return the sorted result as full names string, comma separated.

// For Example, given the list (name, age, gpa):

// David Goodman, 23, 88
// Mark Rose, 25, 82
// Jane Doe, 22, 90
// Jane Dane, 25, 90
// sort(students) should return "Jane Doe,Jane Dane,David Goodman,Mark Rose"

//PREP
//
//
//
//

class Student {
    constructor(age, gpa, fullName) {
      this.age = age;
      this.gpa = gpa;
      this.fullName = fullName;
    };
  };


function sort(students) {
    const ageSort = students.sort((a, b) => a.age - b.age)
    console.log('Age (ascending)')
    console.dir(ageSort)
    const nameSort = ageSort.sort((a,b) =>{
        const lastInitialA = a.fullName.split(' ')[1].split('')[0].toUpperCase();
        // console.log(lastInitialA)
        const lastInitialB = b.fullName.split(' ')[1].split('')[0].toUpperCase();
        // console.log(lastInitialB)
    
        if (lastInitialA < lastInitialB) {
            return -1;
          }
          if (lastInitialA > lastInitialB) {
            return 1;
          }
        
          // names must be equal
          return 0;
        })
        console.log('First letter of last name (ascending)')
        console.dir(nameSort)
        const gpaSort = nameSort.sort((a, b) => b.gpa - a.gpa)
        console.log('GPA (descending)')
        console.dir(gpaSort)
        return gpaSort.map(a=> a.fullName).join(',')
   }

var students = [
                new Student(23, 88, "David Goodman"), 
                new Student(25, 82, "Mark Rose"), 
                new Student(19, 90, "Jane Doe"),
                new Student(25, 90, "Jane Dane")]

console.log(sort(students))
                          //"Jane Doe,Jane Dane,David Goodman,Mark Rose"