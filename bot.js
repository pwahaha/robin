const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var commands = {
    ping: 'pong',
    skills: '{file: "passives.png"}',
    weapons: '{file: "weapons.png"}',
    stats: '{file: "stats.png"}'
    assist: 'Robin does not have any assist skills, you fool.','
};

client.on('message', message => {
    if (message.content.substr(0, 1) !== '.') {
        return;
    }
    for (var i in commands) {
        if (message.content === '.' + i) {
            break;
        }
    }
    message.reply(commands[i]);
});


client.login(process.env.BOT_TOKEN);
