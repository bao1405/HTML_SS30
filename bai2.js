function printLargestOddIntegersSum(n) {
    const oddIntegers = [];
    for (let i = 1; i <= n; i += 2) {
        oddIntegers.push(i);
    }

    console.log("Các số nguyên dương lẻ trong khoảng từ 0 đến", n, "là:", oddIntegers);
    const sum = oddIntegers.reduce((acc, cur) => acc + cur, 0);
    if (sum % 2 !== 0) {
        console.log("Tổng các số nguyên dương lẻ là một số lẻ:", sum);
    } else {
        const lastOddInteger = oddIntegers.pop();
        const newSum = sum - lastOddInteger;
        console.log("Tổng các số nguyên dương lẻ là một số lẻ:", newSum);
    }
}
const n = parseInt(prompt("Nhập vào số nguyên dương n:"));
printLargestOddIntegersSum(n);