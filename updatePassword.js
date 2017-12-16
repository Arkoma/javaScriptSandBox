/* function updatePassword(user, newPassword) {
    const email = user.email;
    user = {
        email,
        password: newPassword
    };
    console.log(user);
  }

  better solution below
   */

function updatePassword(user, newPassword) {
    user.password = newPassword;
    console.log(user)
};

  updatePassword({ email: 'sprikles@cats.com', password: '12345' }, 'I love JS even more!');
  
  