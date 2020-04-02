const Discord = require('discord.js'); 
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', async () => {
    console.log('I am ready!'); 
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'castHelp',
            type: "WATCHING",
        }
     }); 
});

const token = 'Njk0ODc3MDYyNDU2MDE2OTc4.XoXtJw.xWI7x5M7ueDDU0TD1VTA8vv7qIM';

client.login(token);
