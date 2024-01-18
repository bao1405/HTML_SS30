function findSubarrayWithSumGreaterThan(arr, targetSum) {
    let minSubarray = null;
    let currentSum = 0;
    for (let start = 0, end = 0; end < arr.length; end++) {
        currentSum += arr[end];
        while (currentSum > targetSum && start <= end) {
            if (minSubarray === null || end - start < minSubarray.length) {
                minSubarray = arr.slice(start, end + 1);
            }
            currentSum -= arr[start];
            start++;
        }
    }
    return minSubarray;
}
const integerArray = [2, 3, 4, 6, 8, 10];
const targetNumber = 15;
console.log("Mảng số nguyên:", integerArray);
console.log("Số nguyên:", targetNumber);
const resultSubarray = findSubarrayWithSumGreaterThan(integerArray, targetNumber);
console.log("Mảng con nhỏ nhất có tổng lớn hơn", targetNumber, "là:", resultSubarray);