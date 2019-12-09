const Discord = require('discord.js');
const bot = new Discord.Client();

//Requires
const Listener = require('./listener.js');

const fs = require('fs');
const prefix = "/";

//Listen for pings.
Listener.Listen();

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send("Welcome " + member.displayName); 
});

bot.on('ready', () => {
    console.log("Ready.");
})

bot.on('message', message=> {

})

bot.login(process.env.TOKEN);
