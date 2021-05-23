const digit = 8;
const val1 = `${"0".repeat(digit)}${process.argv[2]}`.slice(-digit);
const val2 = `${"0".repeat(digit)}${process.argv[3]}`.slice(-digit);
console.log(
  val1
    .split("")
    .map((v, i) => {
      return val2[i] === "1" && val1[i] === "1" ? "1" : "0";
    })
    .map((v, i) => {
      return v === "1" ? "0" : "1";
    })
    .join("")
);
