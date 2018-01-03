require("./code/load")("code/jacques_journal.js", "code/chapter/04_data.js");

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}