const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[0];
  let quantity=0;
  let randomcash = Math.floor(Math.random() * 200)/100;
  if(item=="Yaygın.kasa") randomcash = Math.floor(Math.random() * 200);
  if(item=="Nadir.kasa") randomcash = Math.floor(Math.random() * 2000);
  if(item=="Epik.kasa") randomcash = Math.floor(Math.random() * 2000);
  //------------------------------------------
    const x = client.db.get(`items_${message.author.id}`);
  const arrayToObject = x.reduce((itemStruct, x) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
   client.db.delete(`items_${message.author.id}`)
  const result = Object.keys(arrayToObject).map(k =>
  
      message.channel.send(`**${arrayToObject} Kasasını Sattın** ve **${randomcash}** **${arrayToObject[k]*randomcash}**💶 kazandın.`)
  );
    const result2 = Object.keys(arrayToObject).map(k =>
  
     quantity=arrayToObject[k]*randomcash
  );
  let sell = client.eco.addMoney(message.author.id, quantity);
   
};

exports.help = {
  name: "sell",
  aliases: [],
  usage: `sell`
};
