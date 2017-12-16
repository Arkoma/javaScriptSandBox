/**
 * callback functions
 */

const numbers = [1, 2, 3, 4];

numbers.forEach(function(num){
     console.log(num);
})//use in place of for loop...does not change array

const mappedValues = numbers.map(function(num){
    return num*2
});//similar to forEach but this changes the array.

console.log(mappedValues)