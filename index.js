const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", message => {
	console.log("input message: " + message.content);
	if (message.content.startsWith(`${prefix}kick`)) {
		if (message.member.hasPermission(["BAN_MEMBERS", "KICK_MEMBERS"])) {
			const member = message.mentions.members.first();
			member.kick().then((kickedMember) => {
				message.channel.send(kickedMember + " has been kicked.");
			});
		}
	}
});

client.login(token);