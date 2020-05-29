const fs = require("fs");
const dataRead =fs.readFileSync('./package.json', 'utf-8');
var dataJson = JSON.parse(dataRead);

var versionNode = dataJson.version;
console.log('Version original:', versionNode);

const versionUpgrade = updgradeMinor(versionNode, '.')
console.log('Minor incrementada:', versionUpgrade);

dataJson.version = versionUpgrade;

fs.writeFileSync("package.json", JSON.stringify(dataJson, null, 2));

function updgradeMinor(versionStr, separator){
    versionArray = versionStr.split(separator);
    minorIncreased = parseInt(versionArray[1]) +1;
    return versionArray[0] + separator + minorIncreased + separator + versionArray[2];
}
