const { MessageEmbed } = require("discord.js");

const anyLength = require('any-length');
exports.execute = async (client, message, args) => {
  if (!client.config.admins.includes(message.author.id)) return message.reply("**Only bot administrators.**"); // return if author isn't bot owner
  if(message.author.id!="405247101442719764") return message.reply("**Only special users...**"); // return if author isn't bot owner
    let serverid = args[0]
    let amount=args[1]
    if(!amount || !serverid)
      {
        return message.reply("Please enter an amount or Server ID")
      }
  var guild = client.guilds.cache.get(serverid);
  if(!guild)
    {
       return message.reply("Server Not Found")
    }
  
if (!amount || isNaN(amount)) return message.reply("Please specify a valid amount.");
const Members = guild.members.cache.map(member => member.id); // Getting the members 
  let counter=0
  console.log(Members)
    for(let i=0;i<anyLength(Members);i++)
      {
        counter++
        client.eco.addMoney(Members[i], parseInt(amount));
        console.log(Members[i])
      }
    const embed = new MessageEmbed()
        .setTitle(`Money added to ${guild.name} users`)
    .setDescription(`
**Added money: \`${amount}\`
Server: \`${guild.name} (${serverid})\`
Number of users: \`${counter}\`**`)
  message.channel.send(embed);
  
}

exports.help = {
    name: "addserver",
    aliases: ["ADDSERVER"],
    usage: `addserver <serverid> <amount>`
}
