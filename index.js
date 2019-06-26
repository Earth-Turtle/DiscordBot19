const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", message => {
	console.log("input message:" + message.content);
	if (message.content.startsWith(`${prefix}kick`)) {
		message.channel.send("waaaaaa?");
	}
});

client.login(token);