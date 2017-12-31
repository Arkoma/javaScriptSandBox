var booksArray = ['Great Expectations', 'The Remains of the Day', 'Peter Pan'];
var myBox = {height: 6, width: 8, length: 10, volume: 480,
    material: 'cardboard',
    contents: booksArray
};
console.log(myBox.width);//to find the particular property width
console.log(myBox.material);
console.log(myBox.contents[1]);

myBox.width = 12; //to reset the width property
console.log(myBox.width);
//but now the volume is wrong so to fix it we do this
myBox.volume = myBox.width * myBox.height * myBox.length;
console.log(myBox.volume);
myBox.contents.push('On The Road');
console.log(myBox.contents);
console.log(booksArray); //pushing modified the contents of the external array referred to by the myBox.contents reference
myBox.weight = 24; //you can add a new property to the object this weigh...see what I did there.
console.log(myBox.weight);
myBox.destination1 = 'Orlando';
myBox.destination2 = 'Miami';
console.log(myBox['volume']);//bracket notation as opposed to dot notation.
console.log(myBox['material']);// an object is like an Array that uses strings instead of numbers to access items in the 'array.' Such strings refer to keys in the object.
myBox['# of stops'] = 2;
console.log(myBox['# of stops']);
for (var i = 0; i <= myBox['# of stops']; i++) {
    console.log( myBox['destination' + i]);
}
//if we wanted to change each book in the box as it's own object with properties of its own.
delete myBox.contents;
//you can also delete something that is not even there and it will still return as true so you need to be careful that you actually delete the thing you want to delete.
delete myBox.nonexistentProperty;
//now to add the books as their own objects into the box object.
myBox['# of books'] = 0
console.log(myBox['# of books'])
function addBook (box, name, writer) {
    box['# of books']++;
    box['book' + box['# of books']] = {title: name, author: writer};
};
addBook(myBox, 'Great Expectations', 'Charles Dickens');
console.log(myBox); /*the name of the book object in the box object is dynamically 
                    assigned due to the concatenation in the above function line 2 
                    which reads box['book' + box['# of books']]*/
addBook ( myBox, 'Remains of the Day', 'Kazuo Ishiguro');
console.log(myBox);
addBook ( myBox, 'Peter Pan', 'J. M. Barrie');
console.log(myBox);
addBook ( myBox, 'On The Road', 'Jack Kerouac');
console.log(myBox);
//we can find internal properties of internal objects using dot notation.
console.log ( myBox.book3.title);
//or bracket notation
console.log ( myBox ['book3'] ['title']);
