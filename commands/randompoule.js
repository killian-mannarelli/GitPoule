const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randompoule')
		.setDescription('Vous montre une poule, pas aussi bien que GitPoule mais bon...'),
	async execute(interaction) {
		//await interaction.reply(`Poule!\nUne image de la poule devrait arriver vite ${interaction.user.username}`);
		const exampleEmbed = new MessageEmbed()
	.setColor('#ffffff')
	.setTitle('GitPoule')
	.setDescription('Votez GitPoule')
	.setImage('https://i.imgur.com/SBbL6ls.png')
	interaction.reply({ embeds: [exampleEmbed] });
	},
	
};