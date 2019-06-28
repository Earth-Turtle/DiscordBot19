module.exports = {
	name: 'kick',
	description: 'kicks a user',
	execute(message, args) {
		if (message.member.hasPermission(["KICK_MEMBERS"])) {
			const memberToKick = message.mentions.members.first();
			memberToKick.kick().then((kickedMember) => {
				message.channel.send(kickedMember + " has been kicked.");
			});
		}
	},
};