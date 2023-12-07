function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArrayOfRandomNumbers(min, max, length = 10) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(random(min, max));
  }
  return arr;
}

// niekada const, funcijos reiksme nepakis. Bet cons leidzia kisti kintamojo vidu
const generateArrayOfRandomNumbers2 = (min, max, length = 10) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(random(min, max));
  }
  return arr;
};

// const naudojamas masyvams, objektams, funkcijoms
// const nekintamumas, geroji praktika, optimizavimas - tam tikru sistemu
// butina funcija aprasyti auksciau negu iskvieciame
const arr = generateArrayOfRandomNumbers2(0, 10, 20);

let arr2 = arr;

console.log(arr);
console.log(arr2);
arr2.push(1);
console.log(arr);
console.log(arr2);

// masyvas su const
const arr3 = [];
arr3.push(10);
arr3.push(1);
arr3.push(9);
console.log(arr3);
arr3.splice(-1);
console.log(arr3);

const arr4 = generateArrayOfRandomNumbers2(1, 99, 20);

// senoji darbo su masyvais sintakse
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
  sum += arr4[i];
}
let average = sum / arr4.length;
console.log(average);

// for of ciklas - skirtas atlikti oprecijas su visais masyvo elementais
// grazina einamojo elemento reiksme
const arr5 = generateArrayOfRandomNumbers2(1, 99, 23);
console.log(arr5);
sum = 0;
for (let value of arr5) sum += value;
average = sum / arr5.length;
console.log(average);

// for in ciklas - skirtas atlikti oprecijas su visais masyvo elementais
// grazina einamojo masyvo elemento indekso reiksme
const arr6 = generateArrayOfRandomNumbers2(1, 1000, 30);
sum = 0;
console.log(arr6);
for (let index in arr6) sum += arr6[index];
average = sum / arr6.length;
console.log(average);

for (let x of arr6) console.log(`OF x: ${x}`);
for (let x in arr6) console.log(`IN x: ${x}`);

// 'filter' pasalinti visus lyginius lementus
const masyvas = [6, 2, 9, 5, 12];
let filteredValues = masyvas.filter((num) => num > 7);
// praeje filtra elementai lieka filteredValues masyve
console.log(filteredValues);

// 'map' pakeicia visas maysvo reiksmes
let masyvas2 = [6, 2, 9, 5, 12];
console.log(masyvas2);
// let modifikuotasMasyvas = masyvas2.map((value, index) => value + index);
let modifikuotasMasyvas = masyvas2.map((value) => {
  if (value < 6) return value + 3;
  else return value;
});
console.log(modifikuotasMasyvas);

// 'reduce' grazina rezultata operacijos su visasis elementais
console.log(masyvas2);
// vidurkio apskaiciavimas
let suma = masyvas2.reduce((total = 0, value) => (total += value));
console.log(suma / masyvas2.length);

// 'some', grazina boolean, ar bent vienas elemenetas yra teisingas
let isThereNumberLargerThanTwelve = masyvas2.some((value) => value > 8);
console.log(isThereNumberLargerThanTwelve);

// 'every' ar visi elementai yra teisingi
let isEveryNumberLargerThanOne = masyvas2.every((value) => value > 1);
console.log(isEveryNumberLargerThanOne);

// 'sort' isdeliojimas pagal salyga. default - didejimo
masyvas2.sort((a, b) => a - b);
console.log(masyvas2);
