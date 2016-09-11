i18n_lang="en",i18n_dict={en:{advertisement:"Advertisement",back_button:"Back",changelog:"Changelog",connect_help:"If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.",connecting:"Connecting","continue":"Continue",create_party:"Create",create_party_instructions:"Give this link to your friends:",creating_party:"Creating party...",gamemode_experimental:"Experimental",gamemode_ffa:"FFA",gamemode_teams:"Teams",games_played:"Games played",highest_mass:"Highest mass",instructions_mouse: "<b>Agario Minions!</b>",
        instructions_space: "Q=Fast eject<br> Y=Fast split",
        instructions_w: "E=Split bots<br> R=Bots eject mass<br> T=Freeze bots<br> F=Bots fast split  ",join_party:"Join",join_party_instructions:"Your friend should have given you a code, type it here:",joined_party_instructions:"You are now playing with this party:",joining_party:"Joining party...",last_match_results:"Last match results",leaderboard:"Leaderboard",leaderboard_time:"Leaderboard Time",login_and_play:"Login and play",login_tooltip:"Login with Facebook to get your benefits!",logout:"Logout",longest_survival:"Longest survival",mass_eaten:"Mass Eaten",option_dark_theme:"Dark theme",option_no_colors:"No colors",option_no_names:"No names",option_no_skins:"No skins",option_show_mass:"Show mass",option_skip_stats:"Skip stats",party:"Party",party_description:"Play with your friends in the same map",party_join_error:"There was a problem joining that party, please make sure the code is correct, or try creating another party",play:"Play",play_as_guest:"Play as guest",player_cells_eaten:"Player Cells Eaten",position_1:"First",position_10:"Tenth",position_2:"Second",position_3:"Third",position_4:"Fourth",position_5:"Fifth",position_6:"Sixth",position_7:"Seventh",position_8:"Eighth",position_9:"Ninth",privacy_policy:"Privacy Policy",region_australia:"Australia",region_china:"China",region_east_asia:"East Asia",region_europe:"Europe",region_north_america:"North America",region_oceania:"Oceania",region_players:"players",region_poland:"Poland",region_russia:"Russia",region_select:" -- Select a Region -- ",region_south_america:"South America",region_turkey:"Turkey",region_us_east:"US East",region_us_west:"US West",score:"Score",share:"Share",shop:"Shop",spectate:"Spectate",stats:"Stats",stats_cells_eaten:"cells eaten",stats_food_eaten:"food eaten",stats_highest_mass:"highest mass",stats_leaderboard_time:"leaderboard time",stats_time_alive:"time alive",stats_top_position:"top position",survival_time:"Survival Time",terms_of_service:"Terms of Service",top_position:"Top Position",total_cells_eaten:"Total cells eaten",total_mass_eaten:"Total mass eaten",unnamed_cell:"An unnamed cell",option_show_borders:"Show borders",option_green_food:"Green food",option_show_others_mass:"Show opponent's mass",option_extended_colors:"Extended colors",option_extra_zoom:"Extra zoom",custom_skin:"Custom skin...",option_75_skin_transparency:"75% skin transparency",option_virus_transparency:"Virus transparency",option_large_names:"Large names",option_show_my_range:"Show my range",option_show_virus_range:"Show virus range",option_show_opponents_range:"Show opponent's range",option_no_grid:"No grid",run_bots:"Run bots",option_follow_my_cell:"Follow my cell",option_follow_my_mouse:"Follow my mouse",option_remember_options:"Remember options"}},i18n_lang=(window.navigator.userLanguage||window.navigator.language||"en").split("-")[0],i18n_dict.hasOwnProperty(i18n_lang)||(i18n_lang="en"),i18n=i18n_dict[i18n_lang];
		
		// ==UserScript==
// @name         Agario Mass - Q
// @namespace    Macro!
// @version      0.5
// @description  Very fast macro to enhance gameplay!
// @author       Unknown
// @match        http://agar.io/
// @match        http://agar.io/?ip=*
// @match        http://petridish.pw/en/
// @match        http://agarly.com/*
// @grant        none
// ==/UserScript==

//v1
//Press a will fire upto 8 feeds
/*$(document).on('keydown',function(e){
if(e.keyCode == 87){
for(var i = 0; i<8; i++){
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}
}
})
*/

//v2
//Press a will fire upto 8 feeds
/*$(document).on('keyup',function(e){
if(e.keyCode == 87){
var count = 50;
var interval = setInterval(function() {
if(count > 50){
clearInterval(interval);
return;
}
count++
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}, 50);
}
})*/

//v3
//Press Q will fire upto 20 feeds
/*var interval;
var theSwitch = false;
$(document).on('keyup',function(e){
if(e.keyCode == 87){
var count = 50;
if(theSwitch){
theSwitch = false;
clearInterval(interval);
return;
}
theSwitch = true;
interval = setInterval(function() {
if(count > 50){ //Change this number if you want more
theSwitch = false;
clearInterval(interval);
return;
}
count++
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}, 1);//increase this number to make it fire them out slower
}
})*/

//v4
//Hold a down and it will keep firing untill you take your finger off!
console.log('called');
var interval;
var switchy = false;
$(document).on('keydown',function(e){
console.log('keydown e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 87){
console.log('keydown 87, switchy '+switchy);
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
console.log('firing');
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}, 3);//increase this number to make it fire them out slower
}
})

$(document).on('keyup',function(e){
console.log('keyup e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 87){
console.log('stop firing');
switchy = false;
clearInterval(interval);
return;
}
})
		
		// ==UserScript==
// @name         Agario Mass - Q
// @namespace    Macro!
// @version      0.5
// @description  Very fast macro to enhance gameplay!
// @author       Unknown
// @match        http://agar.io/
// @match        http://agar.io/?ip=192.168.1.102:443
// @match        http://agar.io/?ip=25.131.19.234:443
// @grant        none
// ==/UserScript==

//v1
//Press a will fire upto 8 feeds
/*$(document).on('keydown',function(e){
if(e.keyCode == 87){
for(var i = 0; i<8; i++){
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}
}
})
*/

//v2
//Press a will fire upto 8 feeds
/*$(document).on('keyup',function(e){
if(e.keyCode == 87){
var count = 0;
var interval = setInterval(function() {
if(count > 7){
clearInterval(interval);
return;
}
count++
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}, 50);
}
})*/

//v3
//Press Q will fire upto 20 feeds
/*var interval;
var theSwitch = false;
$(document).on('keyup',function(e){
if(e.keyCode == 87){
var count = 0;
if(theSwitch){
theSwitch = false;
clearInterval(interval);
return;
}
theSwitch = true;
interval = setInterval(function() {
if(count > 20){ //Change this number if you want more
theSwitch = false;
clearInterval(interval);
return;
}
count++;
console.log('firing');
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}, 10);//increase this number to make it fire them out slower
}
})*/;

//v4
//Hold a down and it will keep firing untill you take your finger off!
console.log('called');
var interval;
var switchy = false;
$(document).on('keydown',function(e){
console.log('keydown e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 87){
console.log('keydown 87, switchy '+switchy);
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
console.log('firing');
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}, 0.1);//increase this number to make it fire them out slower
}
});

$(document).on('keyup',function(e){
console.log('keyup e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 87){
console.log('stop firing');
switchy = false;
clearInterval(interval);
return;
}
});

// ==UserScript==
// @name         Agario Fast split - y
// @namespace    Macro!
// @version      0.5
// @description  Very fast macro to enhance gameplay!
// @author       Unknown
// @match        http://agar.io/
// @grant        none
// ==/UserScript==

//v1
//Press a will fire upto 8 feeds
/*$(document).on('keydown',function(e){
if(e.keyCode == 89){
for(var i = 0; i<8; i++){
$("body").trigger($.Event("keydown", { keyCode: 32}));
$("body").trigger($.Event("keyup", { keyCode: 32}));
}
}
})
*/

//v2
//Press a will fire upto 8 feeds
/*$(document).on('keyup',function(e){
if(e.keyCode == 89){
var count = 50;
var interval = setInterval(function() {
if(count > 50){
clearInterval(interval);
return;
}
count++
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 32}));
$("body").trigger($.Event("keyup", { keyCode: 32}));
}, 50);
}
})*/

//v3
//Press Q will fire upto 20 feeds
/*var interval;
var theSwitch = false;
$(document).on('keyup',function(e){
if(e.keyCode == 89){
var count = 50;
if(theSwitch){
theSwitch = false;
clearInterval(interval);
return;
}
theSwitch = true;
interval = setInterval(function() {
if(count > 50){ //Change this number if you want more
theSwitch = false;
clearInterval(interval);
return;
}
count++
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 32}));
$("body").trigger($.Event("keyup", { keyCode: 32}));
}, 1);//increase this number to make it fire them out slower
}
})*/

//v4
//Hold a down and it will keep firing untill you take your finger off!
console.log('called');
var interval;
var switchy = false;
$(document).on('keydown',function(e){
console.log('keydown e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 89){
console.log('keydown 89, switchy '+switchy);
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
console.log('firing');
$("body").trigger($.Event("keydown", { keyCode: 32}));
$("body").trigger($.Event("keyup", { keyCode: 32}));
}, 3);//increase this number to make it fire them out slower
}
})

$(document).on('keyup',function(e){
console.log('keyup e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 89){
console.log('stop firing');
switchy = false;
clearInterval(interval);
return;
}
})
// ==UserScript==
// @name         Agario Bot Fast split - U
// @namespace    Macro!
// @version      0.5
// @description  Very fast macro to enhance gameplay!
// @author       Unknown
// @match        http://agar.io/
// @grant        none
// ==/UserScript==

//v1
//Press a will fire upto 8 feeds
/*$(document).on('keydown',function(e){
if(e.keyCode == 85){
for(var i = 0; i<8; i++){
$("body").trigger($.Event("keydown", { keyCode: 69}));
$("body").trigger($.Event("keyup", { keyCode: 69}));
}
}
})
*/

//v2
//Press a will fire upto 8 feeds
/*$(document).on('keyup',function(e){
if(e.keyCode == 85){
var count = 50;
var interval = setInterval(function() {
if(count > 50){
clearInterval(interval);
return;
}
count++
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 69}));
$("body").trigger($.Event("keyup", { keyCode: 69}));
}, 50);
}
})*/

//v3
//Press Q will fire upto 20 feeds
/*var interval;
var theSwitch = false;
$(document).on('keyup',function(e){
if(e.keyCode == 85){
var count = 50;
if(theSwitch){
theSwitch = false;
clearInterval(interval);
return;
}
theSwitch = true;
interval = setInterval(function() {
if(count > 50){ //Change this number if you want more
theSwitch = false;
clearInterval(interval);
return;
}
count++
console.log('firing')
$("body").trigger($.Event("keydown", { keyCode: 69}));
$("body").trigger($.Event("keyup", { keyCode: 69}));
}, 1);//increase this number to make it fire them out slower
}
})*/

//v4
//Hold a down and it will keep firing untill you take your finger off!
console.log('called');
var interval;
var switchy = false;
$(document).on('keydown',function(e){
console.log('keydown e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 85){
console.log('keydown 85, switchy '+switchy);
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
console.log('firing');
$("body").trigger($.Event("keydown", { keyCode: 69}));
$("body").trigger($.Event("keyup", { keyCode: 69}));
}, 3);//increase this number to make it fire them out slower
}
})

$(document).on('keyup',function(e){
console.log('keyup e.keyCode="'+e.keyCode+'"');
if(e.keyCode == 85){
console.log('stop firing');
switchy = false;
clearInterval(interval);
return;
}
})

