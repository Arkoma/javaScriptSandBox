/* This is the FizzBuzz challenge at the end of chapter 2 of _Eloquent_JavaScript_

The challenge is to write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

Lastly modify the program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

for (var fizzbuzzCount = 1; fizzbuzzCount < 101; fizzbuzzCount++) {
  if ((fizzbuzzCount % 3 == 0) && (fizzbuzzCount % 5 == 0)) {
    console.log("FizzBuzz")
  } else if (fizzbuzzCount % 3 == 0) {
    console.log("Fizz");
  } else if (fizzbuzzCount % 5 == 0) {
    console.log("Buzz")
  } else
    console.log(fizzbuzzCount)
}