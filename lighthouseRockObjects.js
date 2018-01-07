var superBlinders = [
    ["Firelight", 4000],
    ["Solar Death Ray", 6000],
    ["Supernova", 12000]
  ];
  
var lighthouseRock = {
    gateClosed: true,
    bulbs: [200, 500, 750],
    capacity: 30,
    secretPassageTo: "Underwater Outpost"
  };

  delete lighthouseRock.bulbs;
  lighthouseRock.weaponBulbs = superBlinders;
  lighthouseRock.numRangers = 0;

  console.log(lighthouseRock.weaponBulbs[2][0]);

  function addRanger (location, name, skillz, station) {
      location.numRangers++;
      location['ranger' + location.numRangers] = {name: name, skillz: skillz, station: station};
  }

addRanger(lighthouseRock, 'Nick Walsh', 'magnification burn', 2);
addRanger(lighthouseRock, 'Drew Bartoni', 'uppercut launch', 3);
addRanger(lighthouseRock, 'Christine Wong', 'bomb defusing', 1);
console.log(lighthouseRock);

function dontPanic(location) {
    var list = "Avast, me hearties!\n" +
               "There be Pirates nearby! Stations!\n";
    for (var i = 1; i <= location.numRangers; i++) {
        let ranger = 
        list += location['ranger' + i].name + ', man the ' + location.weaponBulbs[location['ranger' + i].station-1][0] + '!\n';

    }
    alert(list);
};

dontPanic(lighthouseRock);