function map(arr, cb) {
    let newArr = arr.map(cb);
    return newArr;
  }

  /**
   * Below is the teacher's solution
   * 
   * function map(arr, cb) {
   *  const mappedValues = [];
   *   for (let i = 0; i < arr.length; i++) {
   *   mappedValues.push(cb(arr[i]));
   *    }
   *   return mappedValues;
   * }
   * 
   */