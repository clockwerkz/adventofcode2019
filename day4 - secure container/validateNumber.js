module.exports = function (num) {
    if (num < 100000 || num > 999999 ) return false;
    let divider = 100000;
    let lastNumber = Math.floor(num / divider);
    num = num % divider;
    let matchingPair = false;
    divider /= 10;
    let sameNumberCount = 1;
    while (divider >= 1) {
        let currentNumber = Math.floor(num / divider);
        num = num % divider;
        if (currentNumber < lastNumber) return false;
        if (currentNumber === lastNumber && !matchingPair) { 
            sameNumberCount++;
        } else {
            matchingPair = sameNumberCount === 2;
            sameNumberCount=1;
        }
        lastNumber = currentNumber;
        divider /= 10;
    }
    return (sameNumberCount === 2 && !matchingPair) ? true : matchingPair;
}