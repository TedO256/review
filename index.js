//variables

// let a1 = 5;
// a1 = 7;
// a1 = 'Hello'
// b1 = ' World';
// let cat1 = a1.concat(b1);
// console.log(cat1)
// let badnews = `${a1}${b1} from Klendathu`;
// console.log(badnews)
// let A1 = works;
// let a2 = works;
// let 01 = not work;
// let a 1 = not work;
// let a_1 = works;
// let const = not work;

//strings

// let name1 = 'sabrina';
// let I = name1.charAt(4);
// console.log(I);

// //unicode gives a number to each character in its alphabet
// let name2 = "Teddy";
// let D = name2.charCodeAt(2);
// console.log(D);
// let D2 = String.fromCharCode(100)
// console.log(D2)

let me1 = 'Ted';
let me2 = ' OShaughnessy';
let full = me1.concat(me2);
console.log(full);

let start1 = 'Hippopotamus';
let start2 = start1.startsWith('H');
console.log(start2);
let end1 = start1.endsWith('z');
console.log(end1);

const ozgur = 'Once upon a time Ozgur looked up at the Moon, and beamed';
let beam = ozgur.includes('beamed');
console.log(beam)

const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";
const cowdex = joshHadALittleLambOopsCow.indexOf('cow');
console.log(cowdex);

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
const v2 = vanessa.lastIndexOf('Vanessa');
console.log(v2);

const noWeCantTeo = "but did you try it out though?";
const lg = noWeCantTeo.length;
console.log(lg);

const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!";
const ex = replaceGokuWithVegeta.replace("Goku", "Vegeta");
console.log(ex);

const pizzaSentence = "pizza, other half of pizza";
const half = pizzaSentence.slice(7);
console.log(half);
console.log(pizzaSentence.slice(0, 5));

const splitTheBill = "Yaz, Poornima, and Leshawn"
const sparr = splitTheBill.split(', ');
console.log(sparr);




