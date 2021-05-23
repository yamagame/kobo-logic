const val1 = parseInt(process.argv[2], 2);
const val2 = parseInt(process.argv[3], 2);
console.log((~(val1 & val2)).toString(2));
