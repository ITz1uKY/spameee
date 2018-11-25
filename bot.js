const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "510553055968886796"; // ايدي السررفر
var channel = "512699464302198810";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})



 
















 

 

client.login(process.env.BOT_TOKEN)
