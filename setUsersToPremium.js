function setUsersToPremium(users) {
    for (i = 0; i < users.length; i++) {
        users[i].isPremium = true;
    };
    console.log(users);
  }

setUsersToPremium([{ name: 'Bob', isPremium: false }, { name: 'Sue', isPremium: false }]);