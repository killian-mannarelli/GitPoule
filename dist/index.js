"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("./config.json");
const discord_js_1 = require("discord.js");
// Create a new client instance
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, 'DIRECT_MESSAGES', 'GUILD_MESSAGES'] });
// client.commands = new Collection();
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', (message) => {
    console.log("message de " + message.author.username);
    if (message.author != client.user)
        message.channel.send("Hey !");
});
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	// Set a new item in the Collection
// 	// With the key as the command name and the value as the exported module
// 	client.commands.set(command.data.name, command);
// }
// //Permet de répondre aux / commands
// client.on('interactionCreate', async interaction => {
//   if (!interaction.isCommand()) return;
// 	const command = client.commands.get(interaction.commandName);
// 	if (!command) return;
// 	try {
// 		await command.execute(interaction);
// 	} catch (error) {
// 		console.error(error);
// 		await interaction.reply({ content: 'Oups petit problème !', ephemeral: true });
// 	}
// });
// Login to Discord with your client's token
client.login(config_json_1.token);