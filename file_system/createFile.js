const fs = require("fs");

const data = JSON.stringify(process, null, 2);

fs.writeFileSync("data.json", data);

const dataRead =fs.readFileSync('./data.json', 'utf-8');

console.log(typeof dataRead);
//console.log(dataRead);

const jsonData = JSON.parse(dataRead);

console.log(jsonData.version);