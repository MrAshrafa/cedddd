const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});
 
client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});
 
client.on('ready', async() => {
var server = "517785905361190924"; // ايدي السررفر
var channel = "520521586856427542";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
 
 
client2.on('ready', async() => {
var server = "517785905361190924"; // ايدي السررفر
var channel = "520521586856427542";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})
 
// THIS  MUST  BE  THIS  WAY
client2.login(process.env.BOT_TOKEN2);
 
client3.on('ready', async() => {
var server = "517785905361190924"; // ايدي السررفر
var channel = "520521586856427542";//ايدي الروم
    setInterval(()=>{
    client3.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})
 
// THIS  MUST  BE  THIS  WAY
client3.login(process.env.BOT_TOKEN3);
 
client4.on('ready', async() => {
var server = "517785905361190924"; // ايدي السررفر
var channel = "520521586856427542";//ايدي الروم
    setInterval(()=>{
    client4.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})
 
// THIS  MUST  BE  THIS  WAY
client4.login(process.env.BOT_TOKEN4);
