const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login('NTkzMjUzMTcxMTc1MDk2MzMw.XRLMkw.MB8JTJ7SxUhynC7N-hArtcNBHH0');