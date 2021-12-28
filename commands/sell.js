const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[0];
  let quantity=0;
  let randomcash = Math.floor(Math.random() * 200);
  let itemname=0
  //------------------------------------------
    const x = client.db.get(`items_${message.author.id}`);
    if (!x) {
    return message.channel.send(`No Items Found To Display`);
  }
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
      const result3 = Object.keys(arrayToObject).map(k =>
  
     quantity=quantity+(arrayToObject[k]*randomcash)
  );

   let sell = client.eco.addMoney(message.author.id, quantity);
    const  result4 = Object.keys(arrayToObject).find(k =>
    itemname+=" "+k
  );
  let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let argArr = argString.split(' ');
  let agr1=argArr[0]
  let agr2=argArr[1]
  let [uid, newNickname] = argArr;
    const result = Object.keys(arrayToObject).map(k =>
     message.channel.send(`**${k} Kasasını Sattın ve ${arrayToObject[k]*randomcash}💶 kazandın.${quantity}${itemname},,,${agr1},,,${agr2}**`)
  );
};

exports.help = {
  name: "sell",
  aliases: [],
  usage: `sell`
};
