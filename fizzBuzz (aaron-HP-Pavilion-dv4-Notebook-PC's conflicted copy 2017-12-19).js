function fizzBuzz(num) {
    for (var fizzbuzzCount = 1; fizzbuzzCount < num; fizzbuzzCount++) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
      return ("fizzbuzz");
    } else if (num % 3 === 0) {
      return ("fizz");
    } else if (num % 5 === 0) {
      return ("buzz");
    } else
      return (num);
  }
  }
  
  fizzBuzz(7);