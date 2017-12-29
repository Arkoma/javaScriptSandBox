function makeTorpedoAssigner ( passengerArray ){ //change function's name from assignTorpedo to makeTorpedoAssigner and remove the name parameter
    return function ( name ) {
        for (var i = 0; i < passengerArray.length; i++ ) {
            if (passengerArray[i] == name) {  //passengerArray is the only external value inserted into this function, which is apparently good, though I'm not 100% certain why
                alert(
`Ahoy, ${name}!
Man your post at torpedo #${i+1}!`);
            }
        }
    };
}

    var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
    var giveAssignment = makeTorpedoAssigner ( subPassengers );

    giveAssignment('Chewie');