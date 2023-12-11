// DARBAS SU MASYVAIS

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillArrayWithNumbers(min, max, length) {
  let arr = [];
  for (let i = 0; i < length; i++) arr.push(random(min, max));
  return arr;
}

function fillArrayWithLetters(length) {
  let arr = [];
  for (let i = 0; i < length; i++)
    arr.push(String.fromCharCode(random(65, 68)));
  return arr;
}

const generateArrayOfStrings = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(String.fromCharCode(random(65, 68)));
  }
  return arr;
};

function generateUniqueArray(min, max, length) {
  const array1 = [];
  while (array1.length < length) {
    let randomNumber = random(min, max);
    if (!array1.includes(randomNumber)) array1.push(randomNumber);
  }
  return array1;
}

//      1.
console.log(`1 uzd.`);
// let randomLetters = fillArrayWithLetters(200);
let randomLetters = generateArrayOfStrings(200);
console.log(randomLetters);

//      2.
console.log(`2 uzd.`);
randomLetters.sort();
console.log(randomLetters);

//      3.
console.log(`3 uzd.`);
const arr1 = fillArrayWithLetters(200),
  arr2 = fillArrayWithLetters(200),
  arr3 = fillArrayWithLetters(200),
  sumOfIndexs = [],
  uniqueValues = [],
  repeatedValues = [];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

for (let i = 0; i < arr1.length; i++) {
  sumOfIndexs[i] = arr1[i] + arr2[i] + arr3[i];
}
console.log(sumOfIndexs);

for (const value of sumOfIndexs) {
  if (!uniqueValues.includes(value)) uniqueValues.push();
}
let superUniqueCombinations = 0;
for (const value of sumOfIndexs) {
  let countOfThisCombination = 0;
  for (let value2 of sumOfIndexs)
    if (value === value2) countOfThisCombination++;

  if (countOfThisCombination === 1) uniqueValues.push(value);
}

// sumOfIndexs.sort();
// console.log(`SORTED LIST: ${sumOfIndexs}`);
// uniqueValues.push(sumOfIndexs[0]);
// for (let i = 1; i < sumOfIndexs.length; i++) {
//   if (sumOfIndexs[i] === sumOfIndexs[i + 1])
//     repeatedValues.push(sumOfIndexs[i]);
//   else uniqueValues.push(sumOfIndexs[i]);
// }
console.log(
  `Unikaliu nepasikartojanciu sarasas: ${uniqueValues}. Is viso elementu yra ${uniqueValues.length}`
);
console.log(uniqueValues);
console.log(
  `Unikaliu pasikartojanciu sarasas: ${repeatedValues}. Is viso elementu yra ${repeatedValues.length}`
);
console.log(repeatedValues);

//      4.
console.log(`4 uzd.`);
const array1 = generateUniqueArray(100, 999, 100),
  array2 = generateUniqueArray(100, 999, 100);
console.log(`4uzd`);
console.log(array1);
console.log(array2);

//      5.
console.log(`5 uzd`);
const fifthArray = [];

for (let index in arr1) {
  if (arr1[index] !== arr2[index]);
  fifthArray.push(arr1[index]);
}
console.log(fifthArray);

//      6.
console.log(`6 uzd`);
const newArray = [];
for (let value of array1) {
  if (array2.includes(value)) newArray.push(value);
}

const matchingNumbers1 = array1.filter((value) => array2.includes(value));

console.log(newArray);
console.log(matchingNumbers1);

//      7.
console.log(`7 uzd`);

const newArray2 = [];
let i = 0;
for (let index of array1) {
  newArray2[index] = array2[i];
  i++;
}
console.log(newArray2);
