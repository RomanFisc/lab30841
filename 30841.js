/// Part 1 refactoring

// let str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
// let row = str.split('\n');

// for (let i = 0; i < row.length; i++) {
//   let cell = row[i].split(',');
//   console.log(cell[0], cell[1], cell[2], cell[3]);
// }


// Part 2
let newStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let row2 = newStr.split('\n');
let newArr = [];

for (let i = 0; i < row2.length; i++) {
  let column = row2[i].split(',');
  newArr.push(column);
}

console.log(newArr)


//Part 3
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let header = newArr[0].map(header => header.toLowerCase());

objectArr = []
for (let i = 1; i < newArr.length; i++) {
  let objRow = {};
  for (let y = 0; y < header.length; y++) {
    objRow[header[y]] = newArr[i][y];
  }
  objectArr.push(objRow);
}

console.log(objectArr)


//part 4
// remove last entry
objectArr.pop();
//insert this into arr
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

objectArr.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"})
objectArr.push({id: "7", name: "Bilbo", occupation: "None", age: "111"})

console.log(objectArr)

//calculate average age of people
let totalAge = 0;

for (let i = 0; i < objectArr.length; i++) {
  let age = parseInt(objectArr[i]['age'])
  totalAge += age
}

//let avgAge = totalAge / 5;
//console.log(objectArr.length)

let avgAge = totalAge / objectArr.length
console.log(avgAge)