function sumUserPostLikes(user) {
    let x = 0;
    for (let i = 0; i < user.posts.length; i++){
      x += user.posts[i].likes;
    }
 console.log(x); // had trouble getting the scope quite right here
}

sumUserPostLikes({

 posts: [

   {

     likes: 10

   },

   {

     likes: 15

   }

 ]

})

function newFunction(user) {
     let sum = user.posts[i].likes;
     return sum;
 }
