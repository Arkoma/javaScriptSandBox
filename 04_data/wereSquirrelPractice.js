require("./code/load")("code/jacques_journal.js", "code/chapter/04_data.js");

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
// console.log(tableFor('pizza', journal));

var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);
// console.log('pizza' in map);
// console.log(map['touched tree']);

for (var event in map)
  console.log("The correlation for '" + event + "' is " + map[event]);
