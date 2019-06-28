const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	console.log("input message: " + message.content);

	// Kick command
	if (command.equals("kick")) {
		if (message.member.hasPermission(["BAN_MEMBERS", "KICK_MEMBERS"])) {
			const member = message.mentions.members.first();
			member.kick().then((kickedMember) => {
				message.channel.send(kickedMember + " has been kicked.");
			});
		}
	}
});

client.login(token);