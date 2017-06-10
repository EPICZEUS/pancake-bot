const Discord = require("discord.js");
const client = new Discord.Client();

const timeouts = new Discord.Collection();

client.once('ready', () => {
    console.log("Ready!");

    for (const [id, guild] of client.guilds) timeouts.set(id, setInterval(() => guild.defaultChannel.send("🥞").catch(() => null), 300000));
});

client.on('guildCreate', guild => {
   timeouts.set(guild.id, setInterval(() => guild.defaultChannel.send("🥞").catch(() => null), 300000)); 
});

client.on('guildDelete', guild => {
    clearInterval(timeouts.get(guild.id));
    timeouts.delete(guild.id);
});

client.login("");
