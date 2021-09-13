"use strict";

//// CHALLENGE 1 & 2 ////

/*
// Test Data 1
const Mark1 = {
  mass: 78, //kg
  height: 1.69, //meters
};

const John1 = {
  mass: 92, //kg
  height: 1.95, //meters
};

// Test Data 2
const Mark2 = {
  mass: 95, //kg
  height: 1.88, //meters
};

const John2 = {
  mass: 84, //kg
  height: 1.76, //meters
};

function calcBMI(mass, height) {
  return (mass / (height * 2)).toFixed(2);
}

function markHigherBMI(mBMI, jBMI) {
  if (mBMI > jBMI)
    return console.log(`Mark (${mBMI}) has a higher BMI than John (${jBMI})!`);
  if (jBMI > mBMI)
    return console.log(`John (${jBMI}) has a higher BMI than Mark (${mBMI})!`);
  if (jBMI === mBMI)
    return console.log(`John and Mark have the same BMI (${mBMI})!`);
}

// Data 1
const markBMI = calcBMI(Mark1.mass, Mark1.height);
const johnBMI = calcBMI(John1.mass, John1.height);

// Data 2
const markBMI2 = calcBMI(Mark2.mass, Mark2.height);
const johnBMI2 = calcBMI(John2.mass, John2.height);

markHigherBMI(markBMI, johnBMI); // Data 1
markHigherBMI(markBMI2, johnBMI2); // Data 2
*/

//// CHALLENGE 3 ////

/*
const Dolphins = {
  //   scores: [96, 108, 89], // Data 1
  //   scores: [97, 112, 101], // Data 2
  scores: [97, 112, 101], // Data 3
};

const Koalas = {
  //   scores: [88, 91, 110],
  //   scores: [109, 95, 123], // Data 2
  scores: [109, 95, 106], // Data 3
};

function calcAverage([s1, s2, s3]) {
  return ((s1 + s2 + s3) / 3).toFixed(2);
}

function calcWinner(dAvg, kAvg) {
  if (dAvg >= 100 || kAvg >= 100) {
    if (dAvg > kAvg) console.log(`Dolphins win with a score of ${dAvg}!`);
    if (dAvg < kAvg) console.log(`Koalas win with a score of ${kAvg}!`);
    if (dAvg === kAvg) console.log(`It's a tie with a score of ${dAvg}!`);
  } else {
    console.log("No one wins :(");
  }
}

const dolphinsAvg = calcAverage(Dolphins.scores);
const koalasAvg = calcAverage(Koalas.scores);

calcWinner(dolphinsAvg, koalasAvg);
*/

//// CHALLENGE 4 ////

/*
const bills = [275, 40, 430];

function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) tip = bill * 0.15;
  else tip = bill * 0.2;
  return tip;
}

function calcTotal(bill, tip) {
  const total = bill + calcTip(bill);
  console.log(`“The bill was $${bill}, the tip was $${tip}, and the total value 
  $${total}.`);
}

calcTotal(bills[0], calcTip(bills[0]));
calcTotal(bills[1], calcTip(bills[1]));
calcTotal(bills[2], calcTip(bills[2]));
*/

//// CHALLENGE 5 ////

/*
const Dolphins = {
  // scores: [44, 23, 71], // Data 1
  scores: [85, 54, 41], // Data 2
};

const Koalas = {
  // scores: [65, 54, 49], // Data 1
  scores: [23, 34, 27], // Data 2
};

const calcAverage = (s1, s2, s3) => ((s1 + s2 + s3) / 3).toFixed(2);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2)
    console.log(`Dolpins win (${avgDolphins} vs ${avgKoalas})`);
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  else console.log("No team wins");
};

const avgDolphins = calcAverage(
  Dolphins.scores[0],
  Dolphins.scores[1],
  Dolphins.scores[2]
);

const avgKoalas = calcAverage(
  Koalas.scores[0],
  Koalas.scores[1],
  Koalas.scores[2]
);

checkWinner(avgDolphins, avgKoalas);
*/

//// CHALLENGE 6 ////

/*
const bills = [275, 40, 430];
const tips = [];
const total = [];

function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) tip = bill * 0.15;
  else tip = bill * 0.2;
  return tip;
}

tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
total.push(
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2])
);

console.log(tips);
console.log(total);
*/

//// CHALLENGE 7 ////
/*
const Mark = {
  name: "Mark Miller",
  mass: 78, //kg
  height: 1.69, //meters
  calcBMI(mass, height) {
    return (mass / (height * 2)).toFixed(2);
  },
};

const John = {
  name: "John Smith",
  mass: 92, //kg
  height: 1.95, //meters
  calcBMI(mass, height) {
    return (mass / (height * 2)).toFixed(2);
  },
};

function higherBMI(markBMI, johnBMI) {
  if (markBMI > johnBMI)
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
  if (johnBMI > markBMI)
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

const markBMI = Mark.calcBMI(Mark.mass, Mark.height);
const johnBMI = John.calcBMI(John.mass, John.height);

higherBMI(markBMI, johnBMI);
*/

//// CHALLENGE 8 ////

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
*/

//// CHALLENGE 9 ////

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("... " + str);
}

printForecast(data1);
printForecast(data2);
*/

//// CHALLENGE 10 ////
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
printGoals(...game.scored);
*/
