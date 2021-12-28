const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[0];
  let quantity=0;
  let randomcash = Math.floor(Math.random() * 200);
  let itemname=0
  //------------------------------------------
    const x = client.db.get(`items_${message.author.id}`);
  const arrayToObject = x.reduce((itemStruct, x) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    itemname=x.name
  if(itemname=="yaygın.kasa") randomcash = Math.floor(Math.random() * 200)
  if(itemname=="nadir.kasa") randomcash = Math.floor(Math.random() * 2000)
  if(itemname=="epik.kasa") randomcash = Math.floor(Math.random() * 20000)
    return itemStruct;
  }, {});
   client.db.delete(`items_${message.author.id}`)
//  if(k=="yaygın.kasa") randomcash = Math.floor(Math.random() * 200);

    const result2 = Object.keys(arrayToObject).map(k =>
  
     quantity=arrayToObject[k]*randomcash
  );
   message.channel.send(`kazandın.${quantity}${itemname}**`)
      const result3 = Object.keys(arrayToObject).map(k =>
  
     quantity=quantity+(arrayToObject[k]*randomcash)
  );
       const resultcases = Object.keys(arrayToObject).map(k =>
     itemname+=k

  );
   let sell = client.eco.addMoney(message.author.id, quantity);

};

exports.help = {
  name: "sell",
  aliases: [],
  usage: `sell`
};
