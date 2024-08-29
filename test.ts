const Filter = require("./src/filter.js");
const filter = new Filter();

const regexes: string[] = require("./src/regexes.json").regexes;

const text: string = "Masspr mihintsy le tsisy vola lelena";

// function matchExist(text, regexes) {
//   var re = new RegExp(regexes.join("|"));
//   return re.test(text);
// }

let cs = filter.regexCensor(text);
console.log(text);
console.log(cs);
