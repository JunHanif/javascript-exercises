const sumAll = function (start, end) {
    // let arr = [];
    // let a = start;
    // let b = end;

    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR"
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    let sum = 0;
    for (let i = start; i <= end; i++) { sum += i }
    return sum
    // if (end > start) {
    //     for (let i = a; i <= b; i++) {
    //         arr.push(i)
    //     }
    //     return arr.reduce((total, value) => total + value)
    // } else if (start > end) {
    //     for (let i = b; i <= a; i++) {
    //         arr.push(i)
    //     }
    //     return arr.reduce((total, value) => total + value)
    // }
};

// Do not edit below this line
module.exports = sumAll;
