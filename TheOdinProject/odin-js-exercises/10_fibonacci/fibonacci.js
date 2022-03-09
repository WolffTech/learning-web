const fibonacci = function(arg) {
    if (arg > 0) {
        let fib = [0, 1];
        for (let i = 2; i <= arg; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[arg];
    } else {
        return 'OOPS';
    }
};


// Do not edit below this line
module.exports = fibonacci;
