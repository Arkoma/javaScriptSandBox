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
 *         __________                              
 *        |__\_____  \  __ __   ___________ ___.__.
 *        |  |/  / \  \|  |  \_/ __ \_  __ <   |  |
 *        |  /   \_/.  \  |  /\  ___/|  | \/\___  |
 *    /\__|  \_____\ \_/____/  \___  >__|   / ____|
 *    \______|      \__>           \/       \/     
 *      __  .__    .__                             
 *    _/  |_|  |__ |__| ______                     
 *    \   __\  |  \|  |/  ___/                     
 *     |  | |   Y  \  |\___ \                      
 *     |__| |___|  /__/____  >                     
 *               \/        \/                      
 *    ___.           __    __                      
 *    \_ |__  __ ___/  |__/  |_  ____   ____       
 *     | __ \|  |  \   __\   __\/  _ \ /    \      
 *     | \_\ \  |  /|  |  |  | (  <_> )   |  \     
 *     |___  /____/ |__|  |__|  \____/|___|  /     
 *         \/                              \/     
 *
 * This is a little jQuery script from codeschool's course called "Try jQuery."
 * 
 * It modifies the code used in the previous lesson which just replaces a button
 * (actually ALL buttons, which means that the previous code would not be usefull
 * on a page with multiple buttons.  This script uses the "this" to specify that 
 * the interaction happens only to the specific elemnt clicked and not all buttons.
 * This one replaces that specific button with an alternate text when the button is clicked
 *                                                                                         
 */

$(document).ready(function() {
$('.buttonClass').on('click', function() {
  var replacementText = $('<p>"What I want to be displayed when the button is clicked"</p>');
  $('.elementLocationClass').append(replacementText);
  $('buttonClass').remove();
});
});

$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).closest('.elementLocationClass').append(message);
    $(this).find("button").remove();
  });
});

/***  
 *  
 * The .ready waits until the DOM is loaded to execute the script. The .on 
 * is an event handler that turns on a function once an event occurs. The
 * 'button' is the tag that is selected to be acted upon on the event.
 * For this script the event is a click. The click triggers the code to write  
 * into the HTML the variable replaclementText appended to the end of the 
 * HTML code selected with the class .elementLocationClass. Lastly .remove
 * removes the button so that the replacementText actually replaces the button
 *
 */
