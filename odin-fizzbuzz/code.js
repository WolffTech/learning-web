let answer = parseInt(prompt("Enter a number"));

for (let i = 1; answer <= i; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    if (i % 3 === 0) {
        console.log("Fizz");
    }

    if (i % 5 === 0) {
        console.log("Buzz");
    }
}