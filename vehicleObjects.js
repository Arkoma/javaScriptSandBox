const vehicle1 = {
    type: 'Motorboat',
    capacity: 6,
    storedAt: 'Ammunition Depot'
};
const vehicle2 = {
    type: 'Jet Ski',
    capacity: 1,
    storedAt: 'Reef Dock'
};
const vehicle3 = {
    type: 'Submarine',
    capacity: 8,
    storedAt: 'Underwater Outpost'
};
var vehicles = [vehicle1, vehicle2, vehicle3];
var findVehicle = function (name, list) {
    for (var i = 0; i < vehicles.length; i++) {
        if (list[i].type === name) {
            return (list[i].storedAt);
        }
    }
};

findVehicle("Submarine", vehicles);

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = 'Torpedoes';
vehicle1.submersible = false;
vehicle2.weapon = 'Lasers';
vehicle3.capacity *= 2;
vehicle1.weapon = 'Rear-Mounted Slingshot';
vehicle3.submersible = true;

vehicle3["# of weapons"] = 8;
vehicle2['# of weapons'] = 4;
vehicle1['# of weapons'] = 1;