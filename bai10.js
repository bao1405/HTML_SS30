function countWaysToClimbStairs(n) {
    if (n <= 1) {
        return 1;
    } else {
        return countWaysToClimbStairs(n - 1) + countWaysToClimbStairs(n - 2);
    }
}
function printWaysToClimbStairs(n, currentIndex = 0, currentWay = []) {
    if (currentIndex === n) {
        console.log(currentWay.join(' -> '));
        return;
    }
    if (currentIndex + 1 <= n) {
        currentWay.push(currentIndex + 1);
        printWaysToClimbStairs(n, currentIndex + 1, currentWay);
        currentWay.pop();
    }
    if (currentIndex + 2 <= n) {
        currentWay.push(currentIndex + 2);
        printWaysToClimbStairs(n, currentIndex + 2, currentWay);
        currentWay.pop();
    }
}
const numberOfStairs = parseInt(prompt("Nhập số lượng bậc thang:"));
if (isNaN(numberOfStairs) || numberOfStairs <= 0) {
    console.log("Vui lòng nhập số dương cho số lượng bậc thang.");
} else {
    console.log(`Các cách để leo lên thang có ${numberOfStairs} bậc:`);
    printWaysToClimbStairs(numberOfStairs);
}