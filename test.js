var Filter = require("./src/filter.js");
var filter = new Filter();
var regexes = require("./src/regexes.json").regexes;
var text = "Masspr mihintsy le tsisy vola lelena";
var cs = filter.regexCensor(text);
console.log(text);
console.log(cs);
