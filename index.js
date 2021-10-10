const Discord = require('discord.js');
const botClient = new Discord.Client();

botClient.on("message", msg => {
    if (!msg.content.startsWith("!"))//Si le message ne commence pas par le prefix du config.json
		return;

    if(msg.author)
    msg.channel.send('Hello !');
});

botClient.login('ODk2ODY2MzI4OTA2OTg1NTIy.YWNV2w.mEQcSFgeSJi1B2U3Dl-Pta4ZE9U');