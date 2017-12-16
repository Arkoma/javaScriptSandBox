function isPrime (num) {
    if (num < 2) {
          return false;
    }
    var j = 2;
    for (i = 0; i < num; i++) {
      if (num % j === 0 && num > j) {
          return false;
      } 
      j++;
      }
    return true;
    }
  
  isPrime();
  