const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
      let amount2 = Math.floor(Math.random() * 200)/100;
    const embed = new MessageEmbed()
        .setTitle("Test Başarılı!")
    .setTitle(`${amount2}`)
    return message.channel.send(embed);
}

exports.help = {
    name: "test",
    aliases: ["h","t"],
    usage: `test`
}
