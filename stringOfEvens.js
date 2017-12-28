function stringOfEvens(num) {
    numString = ''
    for (i = 0; i < num + 1; i += 2) {
      numString += `${i}`;
    }
    return numString;
  }
  
  stringOfEvens(8);