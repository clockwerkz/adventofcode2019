const validateNumber = require('./validateNumber');

console.log(validateNumber(166888), true);
console.log(validateNumber(123444), false);
console.log(validateNumber(111122), true);
let total = 0;

for (let i=168630; i<718098; i++) {
    if (validateNumber(i)) total++;
}

console.log(total);