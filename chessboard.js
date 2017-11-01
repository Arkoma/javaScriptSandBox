var size = prompt("What size chessboard would you like? \(a standard board is 8x8\)","8")
if ((!isNaN(size)) && size < 51) {
var chessBoard = "";
for (var lineCount = 0; lineCount < size; lineCount++){
  if (lineCount % 2 != 0) {
   var oddLine = ""
   for (var charCount = 0; charCount < size; charCount++){
     if (charCount % 2 != 0) {
       oddLine += " ";
     } else if (charCount % 2 == 0) {
       oddLine += "#";
     }
   }
   oddLine += "\n";
   chessBoard += oddLine;
  } else if (lineCount % 2 == 0) {
   var evenLine = "";
   for (var charCount = 0; charCount < size; charCount++){
     if (charCount % 2 != 0) {
       evenLine += "#";
     } else if (charCount % 2 == 0) {
       evenLine += " ";
     }
   }
   evenLine += "\n";
   chessBoard += evenLine;
  }
}
console.log(chessBoard);
}
else 
 alert("That was either not a number or too big of a number. I can't build you a chessboard without a number. And it would be ridiculous to build one that is bigger than 50x50...and I don't want you to be ridiculous.") 