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
 *    /\/\.____                       .___                               /\/\
 *    )/)/|    |   _____    ____    __| _/______ ____ _____  ______   ___)/)/
 *        |    |   \__  \  /    \  / __ |/  ___// ___\\__  \ \____ \_/ __ \  
 *        |    |___ / __ \|   |  \/ /_/ |\___ \\  \___ / __ \|  |_> >  ___/  
 *        |_______ (____  /___|  /\____ /____  >\___  >____  /   __/ \___  > 
 *                \/    \/     \/      \/    \/     \/     \/|__|        \/  
 *      _____                    __  .__                                     
 *    _/ ____\_ __  ____   _____/  |_|__| ____   ____                        
 *    \   __\  |  \/    \_/ ___\   __\  |/  _ \ /    \                       
 *     |  | |  |  /   |  \  \___|  | |  (  <_> )   |  \                      
 *     |__| |____/|___|  /\___  >__| |__|\____/|___|  /                      
 *                     \/     \/                    \/    
 *
 * This is a little script from Haverbeke's "Eloquent JavaScript" book that demonstrates nested
 * functions and the different scopes of *global* and *local* variables.
 * 
 * It is a useless script that just prints out a "landscape" to the console log.
 *                                                                                         
 */

var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
    result += "_";
  };
  var mountain = function(size) {
    result += "/"
    for (var count = 0; count < size; count++)
    result += "*";
    result += "\\";
    };
        
flat(3);
mountain(4)
flat(6)
mountain(1)
flat(1);
return result;
};

console.log(landscape());

/***  
 *  
 * The "flat" variable sets the length of a flat section using the function "size." Size here is local to the
 * variable "flat." The "result" variable concatenates "_" characters to the end of the paramater "size." Same pattern for
 * the variablel "mountain." It concatenates the characters "/," "*," and "\" to make a mountain "/*\" (notice how the "\"
 * character has to be escaped because it is a special character. The big point here is that the variable "result" is 
 * global but count and size are re-used inside each of the variables "flat," and "mountain" though they arer given 
 * different values within each function meaning that they are local. 
 *  
 */
