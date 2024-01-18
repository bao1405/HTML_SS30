function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
const integerArray = [2, 7, 13, 5, 10, 19, 3, 8];
console.log("Mảng số nguyên:", integerArray);
console.log("Các số nguyên tố trong mảng là:");
for (let i = 0; i < integerArray.length; i++) {
    if (isPrime(integerArray[i])) {
        console.log(integerArray[i]);
    }
}