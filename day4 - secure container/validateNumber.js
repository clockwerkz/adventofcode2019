module.exports = function (num) {
    const arr = num.toString().split('').map(el => parseInt(el));
    if (arr.length !==6) return false;
    let lastNumber = arr[0];
    let matchingPair = false;
    let sameNumberCount = 1;
    for (let i=1; i<arr.length; i++) {
        let currentNumber = arr[i];
        if (currentNumber < lastNumber) return false;
        if (currentNumber === lastNumber) {
            if (!matchingPair) { 
                sameNumberCount++;
            }
        } else {
            if (sameNumberCount===2) matchingPair = true;
            sameNumberCount=1;
        }
        lastNumber = currentNumber;
    }
    if (sameNumberCount===2) matchingPair = true;
    return matchingPair;
}
