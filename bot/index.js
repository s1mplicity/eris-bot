const Eris = require("eris");

var bot = new Eris("BOT_TOKEN_HERE");
// Replace BOT_TOKEN_HERE with your bot's token

bot.on("ready", () => { 
    console.log("Ready!"); 
});

bot.on("messageCreate", (msg) => { //
    if(msg.content === "!ping") { // 
        bot.createMessage(msg.channel.id, "Pong!");
        
    } else if(msg.content === "!pong") { 
        bot.createMessage(msg.channel.id, "Ping!");
        
    }
});

bot.connect(); 