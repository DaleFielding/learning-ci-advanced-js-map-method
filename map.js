  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5]
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results)

// Using map()
const multiplyByTwo = function(num) { // the callback function is usually just passed as a parameter without being assigned to a variable first.
  return num * 2
} 

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()
const mapSimplified = nums.map(function (num) {return num * 2});
console.log(mapSimplified);

// Simplified w/ map() + arrow function
const mapArrow = nums.map(num => num * 2);
console.log(mapArrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map((student) => [student.id, student.name]);
console.log(studentsWithIds);