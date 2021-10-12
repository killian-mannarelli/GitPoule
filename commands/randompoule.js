const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios').default;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('randompoule')
		.setDescription('Vous montre une poule, pas aussi bien que GitPoule mais bon...'),
	async execute(interaction) {
		
		// const response = await axios.get("")
		// console.log(response.data);
		
		const exampleEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle('Une amie de Gitpoule')
			.setDescription(`Voici une poule rien que pour toi`)
			.setImage("https://source.unsplash.com/collection/12211424?sig=" + ((Math.random() * (1 - 74)) + 1));
			interaction.reply({ embeds: [exampleEmbed] });
	
	},
	
};