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
		var flat = function(size) {                        //"flat" variable sets the length of a flat 
				for (var count = 0; count < size; count++) // section using the function "size."
				result += "_";                             // Size here is local to the variable "flat."
		};                                                 // The "result" variable concatenates "_" 
		var mountain = function(size) {                    // characters to the end of the paramater "size"
				result += "/"                              //
				for (var count = 0; count < size; count++) //
				result += "*";                             // Same pattern for the variablel "mountain." 
				result += "\\";                            // It concatenates the characters "/," "*," and
		};                                                 // "\" to make a mountain "/*\" (notice how the
                                                           // "\" character has to be escaped because it is
flat(3);                                                   // a special character
mountain(4)                                                //
flat(6)                                                    // The big point here is that the variable 
mountain(1)                                                // "result" is global but count and size are re- 
flat(1);                                                   // used inside each of the variables "flat," and
return result;                                             // "mountain" though they arer given different 
};                                                         // values within each function meaning that they
                                                           // are local
console.log(landscape());