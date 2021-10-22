const repeatString = function(InputString, NumberOfTimes) {
    let result = "";
    if (NumberOfTimes < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < NumberOfTimes; i++) {
            result += InputString;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
