const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const saveStorage = document.getElementById("saveStorage");
const resetStorage = document.getElementById("resetStorage");
const storage = window.localStorage;


let save;

function load(){
    if (localStorage.getItem("save")){
        save = JSON.parse(localStorage.getItem("save"));
        counter.innerHTML = save.count;
        console.log("Loaded", save);
    } else {
        save = {
            count: 0
        }
        counter.innerHTML = save.count;
        console.log("No save found, new game");
    }
}
load();

clicker.addEventListener("click", function(){
    var warn = Math.random();
    if (warn < 0.015){ //1.5% chance of getting a log
        alert("You've been " + logs[random_logs] + " by " + staff[random_staff] + " for " + reason[random_reason]);
        location.reload();
    } else if (warn < 0.00001){ //0.001% chance of server getting thanosed
        alert("Server got thanosed by "+rebirth[random_rebirth]+ ". New server has been created.")
        storage.removeItem("save");
        counter.innerHTML = 0;
        location.reload();
    } else{ //when you get sparred of log and rebirth, this happens most of the times
        save.count++;
        counter.innerHTML = save.count;
        storage.setItem("save", JSON.stringify(save));
    }
});

//when save button pressed
saveStorage.addEventListener("click", function(){
    storage.setItem("save", JSON.stringify(save));
    alert("Progress is automatically saved but this button is here for your clicking save button fetish!");
});

//when reset button pressed
clearStorage.addEventListener("click", function(){
    storage.removeItem("save");
    counter.innerHTML = 0;
    location.reload();
})

//side leaderboard
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
    function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
//

//choosing random staff member to give you punishment
var staff = ["Lulu", "MeXoof", "Alex", "Trit", "Jif", "Dust"];
var random_staff = Math.floor((Math.random() * staff.length));

//choosing random punishment
var logs = ["muted", "warned", "kicked", '"perma" banned', "verbally warned"];
var random_logs = Math.floor((Math.random() * logs.length));

//choosing random reason for your punishment
var reason = ["arguing.", "rude comments towards members. Take the time to grow up.", "hentai talk.","flooding.","continuing to cause trouble after repeated warns and mutes.", "deliberately messing with #general. I suggest you be careful after just getting off a one week mute.", "being inappropriate.", "being strange. Don’t be strange please.", "swearing.", "harrasment.","disrespect, pinging staff+","staff disrespect","continuing to bring religion topic after being told now to.","troll suggestions.","constantly playing loose with the rules, ignoring staff members, causing unnecessary drama & destructing the server environment. Not welcome back.","switching between VCs repeatedly.","spamming bot commands. Next one is a permanent mute.", "asking members for ages eventhough knowing it.","laughing at someones dead cat. Had multiple infractions in the past, Take time to grow up.","asking for personal info/trolling and keeps going on after being warned.","intentional flood.","falsely pinging staff twice.","advertising a cryptocurrency mining app and telling people to use their code.","mass pinging members using ?afk.","changing nickname to something not pingable after multiple verbal warns","not stopping with making false suggestions, if you keep this up I can assure much hasher punishments will be it’s way. You know the rules, I suggest you discontinue trolling and check pins.","intentionally Flooding/spamming chat with song lyrics.","continuing to post false suggestions after being warned.","continuing to change their name to something not pingable.","commadns in general >3","continuing with reacting after verbal.","speaking another language after there was a verbal in chat."];
var random_reason = Math.floor((Math.random() * reason.length));

//choosing random server thanos
var rebirth = ["Xiao", "Kopo"];
var random_rebirth = Math.floor((Math.random() * rebirth.length));

//choosing random color for staff names
var colors = ['#FF0000', '#FFC000', '#FFFC00', '#F900FF', '#00FFFF', '#FFFFFF', '#ED0A3F', '#C32148', '#FD0E35', '#C62D42', '#CC474B', '#CC3336', '#E12C2C', '#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FF9933', '#FFCC33', '#CCFF00', '#66FF66', '#50BFE6', '#FF00CC', '#FD5240', '#A0E6FF', '#84DE02'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('staff').style.color = random_color;
//choosing random color for three user names
var random_color_1 = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('name-message-1').style.color = random_color_1;
var random_color_2 = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('name-message-2').style.color = random_color_2;
var random_color_3 = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('name-message-3').style.color = random_color_3;

//choosing random message that will be sent by user in chat
var message = ["Hello world!","when new update???","gungu ginga",":kaaba:","we dabin","poggers","GET OUT MY HEAD GET OUT MY HEAD GET OUT MY HEAD","kinda sus ngl","Follow Cheezey GFX on youtube!","to the moon no cap","So guys we did it, we reached quarter of-","BITCHES BE LIKE I- I- YOU- WOW I-","epic","?afk why does my afk no work @lulu give perms","gucci gang gucci gang gucci gang","shii thas wil too bad no one asked doe","funi","bring back the crab rave!","[REDACTED]","looking for a roblox gf must have bobux!","my dad owns roblox he will ban you","@xiaoleung","im a dwarf and im digging a hole","sekitatsu invite","brooooooooooooooooooo","state of mind moment","Hello im John Microsoft and you have a virus!","Mario needs your help to save Zelda! Quickly send pics of your credit card","Xue hua piao piao bei feng xiao xiao",
"madman the madlad", "testestetesttestetest", "This represents our society","!rank","Yui daily"];
var random_message_1 = message[Math.floor(Math.random() * message.length)];
var random_message_2 = message[Math.floor(Math.random() * message.length)];
var random_message_3 = message[Math.floor(Math.random() * message.length)];
document.getElementById("content-message-1").innerHTML = random_message_1;
document.getElementById("content-message-2").innerHTML = random_message_2;
document.getElementById("content-message-3").innerHTML = random_message_3;

//choosing name of a user
var user = ["Zombi", "cera", "Kris28", "Kris", "Loginpu", "Logoutpu", "Senpai", "ダーリン", "Kornel20072007", "Kornel", "Doge", "Filip", "DogeThatDoesRee", "Amogus", "Glitchy", "Alex", "Max", "Lulu", "Xiao", "Xue hua piao piao bei feng xiao xiao", "Piano", "Pianito", "Lunar", "Allstar", "CherrishBoi", "Sofa", "Sofia",
"Cupcake","Somf","Lazur","iiiia","Lilia","Magikarp","Tiger","Hash","Aus","Mykie","Azenar","Cheezey","Cheeze","Trit","Doggie","Indominus","Spy","turt","Voreli","Hinder","Robo","Chrysteria","Dumbass","Dusty","Dust","Jif","Mage","Frozen","Ruiz","Sath","Dyno","Yui","Mee6","Furry","Kopo","shaz","raccoon","maninskie","Dhia","Pingu"];
var random_user_1 = user[Math.floor(Math.random() * user.length)];
var random_user_2 = user[Math.floor(Math.random() * user.length)];
var random_user_3 = user[Math.floor(Math.random() * user.length)];
document.getElementById("name-message-1").innerHTML = random_user_1;
document.getElementById("name-message-2").innerHTML = random_user_2;
document.getElementById("name-message-3").innerHTML = random_user_3;

console.log("Yeah you can freely edit the number of messages you've sent. But wheres the fun in that D:")


//function that will refresh chat every few seconds
//must update arrays in here too for them to be able to show on screen
function refresher(){

var colors = ['#FF0000', '#FFC000', '#FFFC00', '#F900FF', '#00FFFF', '#FFFFFF', '#ED0A3F', '#C32148', '#FD0E35', '#C62D42', '#CC474B', '#CC3336', '#E12C2C', '#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FF9933', '#FFCC33', '#CCFF00', '#66FF66', '#50BFE6', '#FF00CC', '#FD5240', '#A0E6FF', '#84DE02'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('staff').style.color = random_color;

var random_color_1 = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('name-message-1').style.color = random_color_1;
var random_color_2 = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('name-message-2').style.color = random_color_2;
var random_color_3 = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('name-message-3').style.color = random_color_3;


var message = ["Hello world!","when new update???","gungu ginga",":kaaba:","we dabin","poggers","GET OUT MY HEAD GET OUT MY HEAD GET OUT MY HEAD","kinda sus ngl","Follow Cheezey GFX on youtube!","to the moon no cap","So guys we did it, we reached quarter of-","BITCHES BE LIKE I- I- YOU- WOW I-","epic","?afk why does my afk no work @lulu give perms","gucci gang gucci gang gucci gang","shii thas wil too bad no one asked doe","funi","bring back the crab rave!","[REDACTED]","looking for a roblox gf must have bobux!","my dad owns roblox he will ban you","@xiaoleung","im a dwarf and im digging a hole","sekitatsu invite","brooooooooooooooooooo","state of mind moment","Hello im John Microsoft and you have a virus!","Mario needs your help to save Zelda! Quickly send pics of your credit card","Xue hua piao piao bei feng xiao xiao",
"madman the madlad", "testestetesttestetest", "This represents our society","!rank","Yui daily"];
var random_message_1 = message[Math.floor(Math.random() * message.length)];
var random_message_2 = message[Math.floor(Math.random() * message.length)];
var random_message_3 = message[Math.floor(Math.random() * message.length)];
document.getElementById("content-message-1").innerHTML = random_message_1;
document.getElementById("content-message-2").innerHTML = random_message_2;
document.getElementById("content-message-3").innerHTML = random_message_3;


var user = ["Zombi", "cera", "Kris28", "Kris", "Loginpu", "Logoutpu", "Senpai", "ダーリン", "Kornel20072007", "Kornel", "Doge", "Filip", "DogeThatDoesRee", "Amogus", "Glitchy", "Alex", "Max", "Lulu", "Xiao", "Xue hua piao piao bei feng xiao xiao", "Piano", "Pianito", "Lunar", "Allstar", "CherrishBoi", "Sofa", "Sofia",
"Cupcake","Somf","Lazur","iiiia","Lilia","Magikarp","Tiger","Hash","Aus","Mykie","Azenar","Cheezey","Cheeze","Trit","Doggie","Indominus","Spy","turt","Voreli","Hinder","Robo","Chrysteria","Dumbass","Dusty","Dust","Jif","Mage","Frozen","Ruiz","Sath","Dyno","Yui","Mee6","Furry","Kopo","shaz","raccoon","maninskie","Dhia","Pingu"];
var random_user_1 = user[Math.floor(Math.random() * user.length)];
var random_user_2 = user[Math.floor(Math.random() * user.length)];
var random_user_3 = user[Math.floor(Math.random() * user.length)];
document.getElementById("name-message-1").innerHTML = random_user_1;
document.getElementById("name-message-2").innerHTML = random_user_2;
document.getElementById("name-message-3").innerHTML = random_user_3;

setTimeout(arguments.callee, 4000);
};

refresher();
