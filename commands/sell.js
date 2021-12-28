const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[0];
  let quantity=0;
  let randomcash = Math.floor(Math.random() * 200);
  let itemname=" "
  //------------------------------------------
    const x = client.db.get(`items_${message.author.id}`);
    if (!x) {
    return message.channel.send(`No Items Found To Display`);
  }
  const arrayToObject = x.reduce((itemStruct, x) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    itemname=" "+x.name
    return itemStruct;
  }, {});
   client.db.delete(`items_${message.author.id}`)
//  if(k=="yaygın.kasa") randomcash = Math.floor(Math.random() * 200);


   let sell = client.eco.addMoney(message.author.id, quantity);
    const  result4 = Object.keys(arrayToObject).find(k =>
    itemname+=" "+k
  );
  var argString = itemname.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1=argString[0]
  let agr2=argString[1]
  let agr3=argString[1]
 // let [uid, newNickname] = argArr;
  if()
    const result2 = Object.keys(arrayToObject).map(k =>
  
     quantity=arrayToObject[k]*randomcash
  );
      const result3 = Object.keys(arrayToObject).map(k =>
  
     quantity=quantity+(arrayToObject[k]*randomcash)
  );
    const result = Object.keys(arrayToObject).map(k =>
     message.channel.send(`**${k} Kasasını Sattın ve ${arrayToObject[k]*randomcash}💶 kazandın.${quantity}${itemname},,,${agr1},,,${agr2}**`)
  );
};

exports.help = {
  name: "sell",
  aliases: [],
  usage: `sell`
};
