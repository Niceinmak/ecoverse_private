const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1)
    return message.channel.send("**Paran kalmamış :c.**");
  let item = args[0];
  let count = args[1];
  let count2=1;
  if(count==null) count=1;
  if (!item) return message.channel.send("**Neyi satın almak istiyorsun?**");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return message.reply("**Böyle bir eşya bulamadım**");
  let isBalanceEnough = userBalance.amount >= hasItem.cost*count;
  if (!isBalanceEnough)
    {
    return message.reply(`**Bu eşyayı alabilmek için ${hasItem.cost*count}💶 ihtiyacın var.Şuanki paran ${userBalance.amount}💶**`);
    }
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  while(count2<=count){
 client.db.push(`items_${message.author.id}`, itemStruct);
    count2++;
  }
  return message.channel.send(
    `**${count2-1}** tane **${item}** aldın **:dollar: ${hasItem.cost*(count2-1)}**.`
  );
};

exports.help = {
  name: "buy",
  aliases: [],
  usage: `buy <item>`
};
