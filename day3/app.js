//const wire1 = `R8,U5,L5,D3`.split(',');
//const wire2 = `U7,R6,D4,L4`.split(',');
const wire1 = `R75,D30,R83,U83,L12,D49,R71,U7,L72`.split(',');
const wire2 = `U62,R66,U55,R34,D71,R55,D58,R83`.split(',');
let pointer1 = [0,0], pointer2 = [0,0];
let direction1 = null, distance1 = 0;
let direction2 = null, distance2 = 0;
let closestIntersection = Number.MAX_SAFE_INTEGER;
let directionsToProcess = wire1.length > 0 && wire2.length > 0;
while (directionsToProcess) {
    if (distance1 === 0) {
        if (wire1.length > 0) {
            let newDirection = getNewDistance(wire1.shift());
            direction1 = newDirection.direction;
            distance1 = newDirection.distance;
        } 
    }
    if (distance2 === 0) {
        if (wire2.length > 0) {
            let newDirection = getNewDistance(wire2.shift());
            direction2 = newDirection.direction;
            distance2 = newDirection.distance;
        } 
    }
    if (wire2.length === 0 && wire1.length === 0) {
        directionsToProcess = false;
    }
    if (directionsToProcess) {
        if (distance1 > 0) movePointer(pointer1, direction1);
        if (distance2 > 0) movePointer(pointer2, direction2);
        console.log(pointer1, pointer2);
        if (pointer1[0] === pointer2[0] && pointer1[1] === pointer2[1]) {
            console.log('intersection at:', pointer1);
            let intersection = pointer1[0] + pointer1[1];
            closestIntersection = (intersection < closestIntersection) ? intersection : closestIntersection;
        }
    }
    distance1--;
    distance2--;
} 
console.log(closestIntersection);


function getNewDistance(instruction) {
    //this function parses the current instruction, separating direction and distance to travel:
    //'D23' gets separated into direction = 'D' and distance = 23:
    let direction = instruction[0]; 
    let distance = parseInt(instruction.slice(1));
    return { direction, distance }
}

function movePointer(pointer, direction) {
    switch (direction) {
        case 'R':
            pointer[0] += 1;
            break;
        case 'U':
            pointer[1] += 1;
            break;
        case 'D':
            pointer[1] += -1;
            break;
        case 'L':
            pointer[0] += -1;
            break;
        default:
            break;
    }
    return pointer;
}