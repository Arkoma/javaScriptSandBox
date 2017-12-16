function isInteger(num) {
    if (num === 1 || num === 0) {
      return true;
    }
    for (let i = 1; i < num; i++) {
      if (num % i === 0)   return true;
    }
    for (let i = -1; i > num; i--) {
      if ((num * -1) % i === 0) return true;
    }
    return false;
  }
  
  isInteger(0);

  /**
   * Model solution 
   * 
   * function isInteger(num) {
   * return num === parseInt(num);
   * }
   */