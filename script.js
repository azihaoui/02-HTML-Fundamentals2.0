// Function declaration
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(5, 0));
// const appleJuice = fruitProcessor(5, 2);
// console.log(appleJuice);

//Arrow function
// const calcAge3 = (birthYear) => {
//   return 2023 - birthYear;
// };
// const age3 = calcAge3(1993);
// console.log(age3);

// const untilRet = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const ret = 65 - age;
//   return `My name is ${firstName} and I have ${ret} years utntil retierment fam!!!`;
// };
// console.log(untilRet(1993, "Ali"));

// const cutFruitPieces = (fruit) => {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(4, 5));

// const calcAge = (birthYear) => {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
//   //   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1983, "Ali"));
// console.log(yearsUntilRetirement(1943, "MEme"));

// //Array
// const friends = ["Ali", "Zaid", "Morti", "AliKå"];
// console.log(friends[friends.length - 1]);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmetmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// Objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmetmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Ali", "Morti", "Zaid"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     return 2037 - this.birthYear;
//   },
// };
// console.log(jonas.calcAge());

// // For loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition nr: ${rep}`);
// }

const jonasArray = [
  "Jonas",
  "Schmetmann",
  2037 - 1991,
  "teacher",
  ["Ali", "Zaid", "Alikå"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
