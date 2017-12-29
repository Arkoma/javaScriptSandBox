    function assignTorpedo ( name, passengerArray ){
        for ( i = 0; i < passengerArray.length; i++ ) {
            if ( passengerArray[i] == name ) {
                return function () { //By returning the function here
                    alert(`Ahoy, ${name}! 
                    Man your post at torpedo #${i +1}!`);
                };
            }
        } //instead of here using the torpedoAssignment variable, we lock in the value of i at the proper time within the conditional if statement.  This is one way to fix the problem.
    }

    var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
    var giveAssignment = assignTorpedo ( "Chewie", subPassengers );

    giveAssignment();