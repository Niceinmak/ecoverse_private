const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1)
    return message.channel.send(`**${message.author.tag} | You don't have enough money :c.**`);
  let item = args[0];
  let count = args[1];
  let count2=1;
  if(count==null) count=1;
  if (!item) return message.channel.send(`**${message.author.tag} | What are you trying to buy?**`);
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined)
    return message.channel.send(`**${message.author.tag} | That item doesnt exists lol*`);
   if (!count || isNaN(count))
    return message.channel.send(`**${message.author.tag} | The amount you type is not a number**`);
  let isBalanceEnough = userBalance.amount >= hasItem.cost*count;
  if (!isBalanceEnough)
    {
    return message.channel.send(`**${message.author.tag} | Your balance is insufficient. You need ${hasItem.cost*count}💶 to buy this item.Your current money ${userBalance.amount}💶**`);
    }
  if(count<1) return message.reply(`**Remember, you cannot get less than 1 item.**`);
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost*count);
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  while(count2<=count){
 client.db.push(`items_${message.author.id}`, itemStruct);
    count2++;
  }
  return message.channel.send(
    `**${message.author.tag} | ${count2-1} tane ${item} aldın.\n Toplam ${hasItem.cost*(count2-1)}💶 tuttu.**`
  );
};

exports.help = {
  name: "buy",
  aliases: [],
  usage: `buy <item>`
};
