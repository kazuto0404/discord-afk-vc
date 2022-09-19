const Discord = require('discord.js-selfbot-v13');
const config = require('./config');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const { joinVoiceChannel } = require('@discordjs/voice');




client
.on('ready', async () => {
    joinVoiceChannel({
  channelId: "1021248705766096956",
  guildId: "1020455918636384356",
  adapterCreator: client.guilds.cache.get("1020455918636384356").voiceAdapterCreator
})

	.on('ready', async () => {
		console.log(`Logged in as ${client.user.tag} and start afk!`);
		

  })
})




		
	
	.login(config.token);