const Discord = require('discord.js-selfbot-v13');
const config = require('./config');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const { joinVoiceChannel } = require('@discordjs/voice');




client
.on('ready', async () => {
    joinVoiceChannel({
  channelId: "id du salon voc",
  guildId: "id du serv",
  adapterCreator: client.guilds.cache.get("id du serv").voiceAdapterCreator
})

	.on('ready', async () => {
		console.log(`Logged in as ${client.user.tag} and start afk!`);
		

  })
})




		
	
	.login(config.token);