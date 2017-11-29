const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Who are you?') {
    	message.reply("I'm Robin. I'm a tactician for the Shepherds, so let me know if you need a battle plan.");
  	}
});

client.on('message', message => {
    if (message.content === 'Who are you') {
    	message.reply("I'm Robin. I'm a tactician for the Shepherds, so let me know if you need a battle plan.");
  	}
});
    
client.on('message', message => {
    if (message.content === 'who are you') {
    	message.reply("I'm Robin. I'm a tactician for the Shepherds, so let me know if you need a battle plan.");
  	}
});

client.on('message', message => {
    if (message.content === 'who are you?') {
    	message.reply("I'm Robin. I'm a tactician for the Shepherds, so let me know if you need a battle plan.");
  	}
});

client.on('message', message => {
    if (message.content === 'robin is bad') {
    	message.send("no u");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
