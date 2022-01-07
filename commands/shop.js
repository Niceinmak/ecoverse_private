const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - 💶 ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("Do :q buy <item> <quantity> to purchase the item.")
  return message.channel.send(embed);
};

exports.help = {
  name: "shop",
  aliases: ["SHOP"],
  usage: `shop`
};
