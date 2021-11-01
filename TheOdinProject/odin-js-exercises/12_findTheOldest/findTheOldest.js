const findTheOldest = function(args) {
    return args.reduce((acc, curr) => {
        const oldestAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        const currentAge = getAge(curr.yearOfBirth, curr.yearOfDeath);
        return oldestAge < currentAge ? curr : acc;
    });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
