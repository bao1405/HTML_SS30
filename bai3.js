function sortString(str) {
    const letters = [];
    const numbers = [];
    const specials = [];
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
            letters.push(char);
        } else if (/[0-9]/.test(char)) {
            numbers.push(char);
        } else {
            specials.push(char);
        }
    }
    return letters.concat(numbers, specials);
}
const userInput = prompt("Nhập vào một chuỗi bất kỳ:");
const sortedArray = sortString(userInput);
console.log("Chuỗi sau khi sắp xếp:", sortedArray.join(''));