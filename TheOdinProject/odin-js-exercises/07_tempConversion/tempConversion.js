const ftoc = function(args) {
  let answer = (args - 32) * (5 / 9); 
  return Math.round(answer * 10) / 10;
};

const ctof = function(args) {
  let answer = args * (9 / 5) + 32;
  return Math.round(answer * 10) / 10;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};
