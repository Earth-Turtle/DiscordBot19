// Grabs the filesystem access of node.js
const fs = require('fs');
//Gets discord's API
const Discord = require("discord.js");
//Gets the settings done in our config file
const { prefix, token } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", message => {
	//Every time someone sends a message, this runs
	//If the message doesn't start with the bot's prefix, or if the message was sent by a bot, exit early
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	//Get the different aspects of the command, first by slicing off the prefix, then seperating by spaces
	const args = message.content.slice(prefix.length).split(/ +/);
	//Shift out the command, leaving the arguments in an array
	const commandName = args.shift().toLowerCase();

	//Console debugging
	console.log("input message: " + message.content);

	//If the command isn't in the list of command files, return early
	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	try {
		//If it is a viable command, execute it, passing through the message and the arguments
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);