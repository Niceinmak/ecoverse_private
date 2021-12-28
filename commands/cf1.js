exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount4 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let amount5 = args[1]
    let yazitura= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
    let timecooldown = Math.floor(Math.random() * 200)+50;
        let playtime = await client.eco.beg(client.ecoAddUser, timecooldown,{ canLose: true, cooldown: 5000, customName: "search" });
    if (playtime.onCooldown) return message.reply(`**Biraz yavaş ol,${playtime.time.seconds} saniye daha bekle.**`);
        if (amount3=="yazı" || amount3=="tura")
 {
    if (!amount5 || isNaN(amount5)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
    if(amount5>authordata.amount || amount5<1)  return message.channel.send(`** ⛔${message.author.tag} | ** Girdiğiniz miktar paranızdan fazla veya 1'den az olamaz`);
    else
    {
   
                message.channel.send(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor.🪙`).then(async msg => {
        setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor..🪙`);
        }, 1000);
                setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor...🪙`);
        }, 2000);
                          setTimeout(() => {
           if([Math.floor(amount2)]==0)
        {
            let data = client.eco.addMoney(message.author.id, parseInt(amount5));
      msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor...🪙 ve **${(amount5)}**💶 Kazandın!`);
        }
    else {
      let data2= client.eco.removeMoney(message.author.id, parseInt(amount5));
     msg.edit(`**${message.author.tag} | ** **${amount5}**💶 oynadı ve **${amount3}** seçti! \n Para döndürülüyor...🪙 ve maalesef **kaybettin :c**`);
    }
        }, 3000);
        })
     
    }}
};

exports.help = {
    name: "cf1",
    aliases: ["coinflip","yazıtura"],
    usage: "cf1 <yazı,tura> <miktar>"
}
