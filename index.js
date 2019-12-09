const Discord = require('discord.js');
const bot = new Discord.Client();

//Prefix to all commands
const prefix = "/";

//FS is needed for saving/loading
const fs = require('fs');

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}


//Requires
const Listener = require('./listener.js');

//Listen for pings.
Listener.Listen();

//Send this message when a new member joins
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send("Welcome " + member.displayName); 
});

//Called when the bot gets online
bot.on('ready', () => {
    console.log("Ready.");
})

//
bot.on('message', message=> {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
})

bot.login(process.env.TOKEN);
