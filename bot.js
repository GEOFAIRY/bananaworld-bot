/*
A terrible discord bot that is completely useless and not funny

Kyran Stagg (11-Oct-2018)
*/



const Discord = require('discord.js');
const client = new Discord.Client();
const general = '403093923418865664';
var json = require('./key.json');
var api_key = json.api_key;



function intervalFunc() {
	/*function to send a message to a given channel*/
	var channel = client.channels.find('id', general);
	channel.send("@here Beep");
	var date = new Date();
	var current_hour = date.getHours();
	console.log('Beeped at ' + current_hour);
}

function hahFunc() {
	/*function to send a message to a given channel*/
	var channel = client.channels.find('id', '499829983213256705');
	channel.send("hah");
	var date = new Date();
	var current_hour = date.getHours();
	console.log('Beeped at ' + current_hour);
}

client.on('ready', () => {
	/*function to say bot is on!*/
	console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
	/*function to do silly things to messages sent*/
	if (msg.content === '!ping') {
		//ping command
		msg.reply('pong!');
	}
	if (msg.content === '!quit') {
		//quit command
		msg.reply('later fags');
		process.exit();
	}
	if (msg.content === '!roll') {
		//roll command
		msg.react("🇳");
		msg.react("🇴");
		msg.react("🇺");
	}
});



client.login(api_key);	//login the bot
setInterval(intervalFunc, 3600000);		//set a function to run ever 30 minutes
setTimeout(function(){ 

        setInterval(hahFunc, 120);
    }, 6000);
