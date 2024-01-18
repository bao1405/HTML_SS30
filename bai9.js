function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
function printFibonacciSequence(n, currentIndex = 0) {
    if (currentIndex < n) {
        console.log(fibonacci(currentIndex));
        printFibonacciSequence(n, currentIndex + 1);
    }
}
const numberOfElements = 10;
console.log(`Dãy Fibonacci có ${numberOfElements} phần tử:`);
printFibonacciSequence(numberOfElements);