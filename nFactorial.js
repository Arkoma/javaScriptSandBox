function nFactorial (num) {
    var factorial = 1;
    for (i = 2; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  nFactorial(10);