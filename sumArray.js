function sumArray(numbers, cb) {
    numbers.forEach(function(cb) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return numbers.reduce(reducer, 1);
    });
}

/**
 * Teacher solution below:
 * 
 * function sumArray(numbers, cb) {
 * // code here
 * // try to use the array reduce method to find the sum
 * const sum = numbers.reduce((runningTotal, num) => runningTotal + num);
 *   cb(sum);
 * }
 */