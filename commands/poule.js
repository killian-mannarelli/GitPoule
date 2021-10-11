const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poule')
		.setDescription('Renvoie une image de la meilleure poule with Pong!'),
	async execute(interaction) {
		await interaction.reply(`Poule!\nUne image de la poule devrait arriver vite ${interaction.user.username}`);
	},
};