function assignLaser(shark, sharkList) {
    for (var i = 0; i < sharkList.length; i++) {
      if (shark == sharkList[i]) {
        return function() {
          alert("Yo, " + shark + "!\n" +
                "Visit underwater strapping station " +
                (i + 1) + " for your sweet laser.");
        };
      }
    }
  }

const sharkListArr = ["Sea Pain", "Great Wheezy", "DJ Chewie",
"Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
"Ice Teeth", "The Notorious J.A.W."];
let handOutLaser = assignLaser ('DJ Chewie', sharkListArr);
handOutLaser ();