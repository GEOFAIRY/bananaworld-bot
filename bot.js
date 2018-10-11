const Discord = require('discord.js');
const client = new Discord.Client();

function intervalFunc() {
	const channel = client.channels.find('id', '403093923418865664');
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
    msg.reply('later fags')
    process.exit();
  }
  //msg.react("🇳");
  //msg.react("🇴");
  //msg.react("🇺");
});

client.login('NDk5NDc4NDY4NjQ4NzYzMzkz.Dp-TsQ.gZTSs1-giBJNevQplfUbCk4InZI');

setInterval(intervalFunc, 3600000);