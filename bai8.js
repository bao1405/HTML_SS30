function findTripletsWithSum(arr, targetSum) {
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1, k = n - 1; j < k;) {
            const currentSum = arr[i] + arr[j] + arr[k];
            if (currentSum === targetSum) {
                return [arr[i], arr[j], arr[k]];
            } else if (currentSum < targetSum) {
                j++;
            } else {
                k--;
            }
        }
    }
    return null;
}
const integerArray = [1, 2, 3, 4, 5, 6, 7];
const targetNumber = 12;
console.log("Mảng số nguyên:", integerArray);
console.log("Số nguyên:", targetNumber);
const resultTriplets = findTripletsWithSum(integerArray, targetNumber);
if (resultTriplets) {
    console.log("Ba phần tử có tổng bằng", targetNumber, "là:", resultTriplets);
} else {
    console.log("Không tìm thấy ba phần tử có tổng bằng", targetNumber);
}