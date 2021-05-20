const Discord = require('discord.js');
const bot = new Discord.Client();

var fs = require('fs');
var files = fs.readdirSync('./img/');

bot.on('ready', () => {
  bot.user.setStatus('dnd') //You can set idle, dnd or invisible
  bot.user.setActivity("ACTIVITY_HERE",  { type: 'LISTENING' }) // PLAYING , LISTENING , WATCHING , STREAMING
});

bot.on('message', msg => {
    if (msg.content === 'floppa') {
        //number = 29;
        //imageNumber = Math.floor (Math.random() * (number -1 + 1))+ 1;
        //msg.channel.send ( {files: ["./img/" + imageNumber + ".png"]} )
        imageNumber = files[Math.floor(Math.random()*files.length)]
        msg.channel.send ( {files: ["./img/" + imageNumber]} )
        msg.react('REACTION_NAME_HERE');  
    }

  });



bot.login ('TOKEN_HERE');