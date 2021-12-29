const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[0];
  let quantity=0;
  let randomcash = Math.floor(Math.random() * 200);
  let itemname=" "
  let count1=0
  let count2=0
  let count3=0
  //------------------------------------------
    const x = client.db.get(`items_${message.author.id}`);
    if (!x) {
    return message.channel.send(`No Items Found To Display`);
  }
  const arrayToObject = x.reduce((itemStruct, x) => {
    itemStruct[x.name] = (itemStruct[x.name] || 0) + 1;
    return itemStruct;
  }, {});
//  if(k=="yaygın.kasa") randomcash = Math.floor(Math.random() * 200);
    const result = Object.keys(arrayToObject).map(k =>
       itemname+=k+" "+arrayToObject[k]+" "
  //   message.channel.send(`**${k} Kasasını Sattın ve ${randomcash},${quantity*randomcash}💶 kazandın.${quantity}$,${count1},${itemname},,,${agr1},,,${agr2},,,${agr3}**`)
  );
     client.db.delete(`items_${message.author.id}`)
  var argString = itemname.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1=argString[0]
  let agr2=argString[1]
  let agr3=argString[2]
  let agr4=argString[3]
  let agr5=argString[4]
  let agr6=argString[5]
  count1=agr2;
  if(agr3!="undefined" || agr3!="")
    {
      count2=agr4;
    }
    if(agr6!="undefined" || agr3!="")
    {
      count3=agr6;
    }
  if()
  randomcash = Math.floor(Math.random() * count1);
    const result1 = Object.keys(arrayToObject).map(k =>
  
     quantity+=arrayToObject[k]
  );
     let sell = client.eco.addMoney(message.author.id, 1);

      const  result2 = Object.keys(arrayToObject).find(k =>
    message.channel.send(`**${k} Kasasını Sattın ve ${randomcash},${quantity*randomcash}💶 ${itemname}kazandın.${agr1},${agr2},${agr3},${agr4},${agr5},${agr6} \n${count1},${count2},${count3}**`)
  );
   
};

exports.help = {
  name: "sell",
  aliases: [],
  usage: `sell`
};
