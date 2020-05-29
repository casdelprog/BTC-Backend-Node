const fs = require("fs");

const data = JSON.stringify(process);

fs.writeFileSync("data.json", data);