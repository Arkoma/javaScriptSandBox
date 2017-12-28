function adventureSelector(userChoice) {
    if (userChoice == 1) {return function () { window.alert("You selected the Vines of Doom!")};
    } else if (userChoice == 2) {return function () { window.alert("Looks like you want the Lake of Despair!")};
    } else if (userChoice == 3) {return function () { window.alert("The Caves of Catastrophe!")};
    }
  }
  
  adventureSelector(2);
