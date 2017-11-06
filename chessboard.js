/***
 *      /$$$$$$  /$$$$$$$  /$$$$$$$  /$$   /$$ /$$$$$$$  /$$   /$$                           /$$    
 *     /$$__  $$| $$__  $$| $$__  $$| $$  | $$| $$__  $$| $$  /$$/                          | $$    
 *    | $$  \ $$| $$  \ $$| $$  \ $$| $$  | $$| $$  \ $$| $$ /$$/      /$$$$$$$   /$$$$$$  /$$$$$$  
 *    | $$$$$$$$| $$  | $$| $$$$$$$ | $$  | $$| $$$$$$$/| $$$$$/      | $$__  $$ /$$__  $$|_  $$_/  
 *    | $$__  $$| $$  | $$| $$__  $$| $$  | $$| $$__  $$| $$  $$      | $$  \ $$| $$$$$$$$  | $$    
 *    | $$  | $$| $$  | $$| $$  \ $$| $$  | $$| $$  \ $$| $$\  $$     | $$  | $$| $$_____/  | $$ /$$
 *    | $$  | $$| $$$$$$$/| $$$$$$$/|  $$$$$$/| $$  | $$| $$ \  $$ /$$| $$  | $$|  $$$$$$$  |  $$$$/
 *    |__/  |__/|_______/ |_______/  \______/ |__/  |__/|__/  \__/|__/|__/  |__/ \_______/   \___/  
 *                                                                                                  
 *                                                                                                  
 * 
 *           .__                         ___.                          .___
 *      ____ |  |__   ____   ______ _____\_ |__   _________ _______  __| _/
 *    _/ ___\|  |  \_/ __ \ /  ___//  ___/| __ \ /  _ \__  \\_  __ \/ __ | 
 *    \  \___|   Y  \  ___/ \___ \ \___ \ | \_\ (  <_> ) __ \|  | \/ /_/ | 
 *     \___  >___|  /\___  >____  >____  >|___  /\____(____  /__|  \____ | 
 *         \/     \/     \/     \/     \/     \/           \/           \/ 
 *           .__           .__  .__                                        
 *      ____ |  |__ _____  |  | |  |   ____   ____    ____   ____          
 *    _/ ___\|  |  \\__  \ |  | |  | _/ __ \ /    \  / ___\_/ __ \         
 *    \  \___|   Y  \/ __ \|  |_|  |_\  ___/|   |  \/ /_/  >  ___/         
 *     \___  >___|  (____  /____/____/\___  >___|  /\___  / \___  >        
 *         \/     \/     \/               \/     \//_____/      \/         
 *
 *
 * This is a javascript challenge from Marijn Haverbeke's book, Eloquent JavaScript.  This one is
 * called the chessboard, because it is written to output to the console log a grid using spaces 
 * and hashtags.  
 * 
 * It does this by having a for loop nested inside another for loop. The odd lines using the
 * variable, "oddLine" creates a pattern of one space followed by one hashtag alternating until
 * the line reaches the length input by the user which has been assigned to the variable "size."
 * The variable "evenLine" uses the same conditional statemenst only changing the pattern by 
 * starting with the hashtag and then the space. The chessboard variable then repeats this 
 * pattern back and forth with odd lines and even lines until the number of lines matches the 
 * same variable "size."
 * 
 * This one took several tries for me to finally get it right.
 * 
 */

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