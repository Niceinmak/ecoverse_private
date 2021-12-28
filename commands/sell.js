const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  let item = args[0];
  let quantity=0;
  let randomcash = Math.floor(Math.random() * 200);
  let itemname=" "
  let count1=0
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
    const  result4 = Object.keys(arrayToObject).find(k =>
    itemname+=" "+k
  );
  var argString = itemname.substring(1).split(' ');
 // let argString = itemname.substr( itemname.indexOf(' ') + 1 );
  let agr1=argString[0]
  let agr2=argString[1]
  let agr3=argString[2]
 // let [uid, newNickname] = argArr;
  if(agr1!="undefined")
    {
      if(agr1=="yaygın.kasa")
        {
          count1+=200;
        }
      if(agr1=="nadir.kasa")
        {
          count1+=2000;
        }
      if(agr1=="epik.kasa")
        {
          count1+=20000;
        }
    }
    if(agr2!="undefined")
    {
      if(agr2=="yaygın.kasa")
        {
          count1+=200;
        }
      if(agr2=="nadir.kasa")
        {
          count1+=2000;
        }
      if(agr2=="epik.kasa")
        {
          count1+=20000;
        }
      
    }
    if(agr3!="undefined")
    {
      if(agr3=="yaygın.kasa")
        {
          count1+=200;
        }
      if(agr3=="nadir.kasa")
        {
          count1+=2000;
        }
      if(agr3=="epik.kasa")
        {
          count1+=20000;
        }
      
    }
  randomcash = Math.floor(Math.random() * count1);
    const result2 = Object.keys(arrayToObject).map(k =>
  
     quantity+=arrayToObject[k]
  );
     let sell = client.eco.addMoney(message.author.id, quantity*randomcash);
    const result = Object.keys(arrayToObject).map(k =>
     message.channel.send(`**${k} Kasasını Sattın ve ${randomcash},${quantity*randomcash}💶 kazandın.${quantity}$,${count1},${itemname},,,${agr1},,,${agr2},,,${agr3}**`)
  );
};

exports.help = {
  name: "sell",
  aliases: [],
  usage: `sell`
};
