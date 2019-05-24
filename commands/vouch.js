const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {

    let vouchMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!vouchMember) return message.channel.send("Please provide a user to vouch.")

    let vWhy = args.slice(1).join(" ")
    if(!vWhy) return message.channel.send("Please provide why this user is being vouched!")

    message.channel.send(`${vouchMember.user.tag} was vouched!`)
}

module.exports.config = {
    name: "vouch",
    description: "Vouch a member",
    usage: ";vouch <@user> <why>",
    accessableby: "Members",
    aliases: []
}