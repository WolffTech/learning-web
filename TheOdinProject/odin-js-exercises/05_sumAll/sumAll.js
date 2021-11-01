const sumAll = function(min, max) {
    if (!Number.isInteger(min || !Number.isInteger(max))) {
        return "ERROR: Please enter integers";
    }
    if (min < 0 || max < 0) {
        return "ERROR: Please enter positive integers";
    }
    if (min > max) {
        return "ERROR: Please enter a valid range";
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
};

// Do not edit below this line
module.exports = sumAll;
