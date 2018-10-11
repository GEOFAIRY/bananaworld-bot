/*
A terrible discord bot

Kyran Stagg (11-Oct-2018)
*/


const Discord = require('discord.js');
const client = new Discord.Client();

const general = '403093923418865664';
var json = require('./key.json');
var api_key = json.api_key;

function intervalFunc() {
	const channel = client.channels.find('id', general);
	channel.send("@here Beep");
	var date = new Date();
	var current_hour = date.getHours();
	console.log('Beeped at ' + current_hour);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === '!ping') {
		msg.reply('pong!');
	}
	if (msg.content === '!quit') {
		msg.reply('later fags');
		process.exit();
	}
	if (msg.content === '!roll') {
		msg.react("🇳");
		msg.react("🇴");
		msg.react("🇺");
	}
});

client.login(api_key);

setInterval(intervalFunc, 3600000);