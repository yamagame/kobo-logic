const fs = require("fs");
const filename = process.argv[2];
console.log(fs.readFileSync(filename, "utf-8") || "0");
