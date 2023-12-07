function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// darbas su sudetinemis salgyomis
//  2.
let s = 0, // atstumas tarp automobiliu km
  v1 = 0, // pirmojo automobilio greitis km/h
  v2 = 0, // antrojo automobilio greitis km/h
  t = 0; // keliones laikas valandomis

s = random(0, 1000);
v1 = random(50, 200);
v2 = random(50, 200);
t = random(1, 24);

console.log(`s: ${s}km, v1: ${v1}km/h, v2: ${v2}km/h, t: ${t}h`);
let pirmasAutomobilisNuvaziuos = v1 * t;
let antrasAutomobilisNuvaziuos = v2 * t;
console.log(`Pirmasis automobilis nuvaziuos ${pirmasAutomobilisNuvaziuos} km`);
console.log(`Antrasis automobilis nuvaziuos ${antrasAutomobilisNuvaziuos} km`);
console.log(
  `atstumai: ${
    pirmasAutomobilisNuvaziuos - antrasAutomobilisNuvaziuos
  }, kelias: ${s}`
);
if (pirmasAutomobilisNuvaziuos - antrasAutomobilisNuvaziuos < s)
  console.log(`Antrasis automobilis pavijo pirmaji automobili`);
else console.log(`Antrasis automobilis niekada nepavis pirmojo`);

console.log(` `);
console.log(`3 uzd.`);
//  3.
let t1 = random(-30, 30),
  t2 = random(-30, 30),
  t3 = random(-30, 30);
let teigiama = 0;
let neigiama = 0;
let teigiamosDienos = "",
  neigiamosDienos = "";

console.log(`${t1}, ${t2}, ${t3}`);

if (t1 < 0) neigiama++;
else teigiama++;
if (t2 < 0) neigiama++;
else teigiama++;
if (t3 < 0) neigiama++;
else teigiama++;

if (teigiama === 0) teigiamosDienos = "nei viena diena";
else if (teigiama === 1) teigiamosDienos = "viena";
else if (teigiama === 2) teigiamosDienos = "dvi";
else teigiamosDienos = "tris";
if (neigiama === 0) neigiamosDienos = "nei viena diena";
else if (neigiama === 1) neigiamosDienos = "viena";
else if (neigiama === 2) neigiamosDienos = "dvi";
else neigiamosDienos = "tris";
console.log(`${teigiamosDienos} teigiama, ${neigiamosDienos} - neigiama.`);

// Darbas su kintamaisiais

//      11.
console.log(` `);
console.log(`11 uzd.`);
let str =
  "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite.";
console.log(str);
let str2 = str
  .replaceAll("{{planet}}", "earth")
  .replaceAll("{{star}}", "sun")
  .replaceAll("{{age}}", "4.54 billion years")
  .replaceAll("{{satellite}}", "moon");
console.log(str2);

//      12.
console.log(` `);
console.log(`12 uzd.`);

function makeSmth(number) {
  console.log(number.toFixed(2));
}

makeSmth(random(0, 10));

//      13.
console.log(` `);
console.log(`13 uzd.`);
let a = 5,
  b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(`a:${a}, b:${b}`);
