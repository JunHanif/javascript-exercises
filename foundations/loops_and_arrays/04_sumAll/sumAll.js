const sumAll = function (start, end) {
    let arr = [];
    let a = start;
    let b = end;

    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }

    if (end > start) {
        for (let i = a; i <= b; i++) {
            arr.push(i)
        }
        return arr.reduce((total, value) => total + value)
    } else if (start > end) {
        for (let i = b; i <= a; i++) {
            arr.push(i)
        }
        return arr.reduce((total, value) => total + value)
    }
};

// Do not edit below this line
module.exports = sumAll;
