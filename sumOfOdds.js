function sumOfOdds(num) {
    var result = 0
    for (i = 1; i <= num; i += 2) {
        result += i;
    }
    return result;
}
sumOfOdds(5);