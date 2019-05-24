const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor(colors.bluered)
    .setAuthor(`${message.author.tag} Vouches`)
    .setDescription(`Not implemented!`)
    .addField("Date:", message.createdAt.toLocaleString())
    
     message.channel.send(embed)
}

module.exports.config = {
    name: "stats",
    description: "Check your stats!",
    usage: ";stats",
    accessableby: "Members",
    aliases: []
}