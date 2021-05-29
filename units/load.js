const fs = require("fs");
const filename = process.argv[2];
try {
  console.log(fs.readFileSync(filename, "utf-8"));
} catch (err) {
  console.log("0");
}
