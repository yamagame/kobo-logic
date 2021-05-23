const digit = 8;
const rotate = (val) => {
  const _val = `${"0".repeat(digit)}${val}`.slice(-digit);
  return `${_val}${_val[0]}`.slice(-digit);
};
console.log(rotate(process.argv[2]));
