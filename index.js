const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: "everyone" });
const DBL = require('dblapi.js');
const disbut = require("discord-buttons");
disbut(client);
const { MessageButton } = require('discord-buttons')
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.config = require("./botConfig");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = {
  "common.case": {
    cost: 100,
  },
  "rare.case": {
    cost: 1000,
  },
  "epic.case": {
    cost: 10000,
  },
};
const fs = require("fs");
const dbl = new DBL(process.env.TOPGG_TOKEN, { webhookPort: 3000, webhookAuth: process.env.TOPGG_AUTH });
dbl.webhook.on('ready', hook => {
  //console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  const channel = client.channels.cache.get(process.env.VOTE_POST_CHANNEL)
  const embed = new Discord.MessageEmbed()
  .setTitle(`${vote.name} voted for EcoVerse!`)
  .setDescription(`──────────────────────────
  **:tada: Thanks for voting!
  :sparkles: Voted By:<@${vote.user}>
  :diamond_shape_with_a_dot_inside: Wait 12 Hours to vote again!
  🔗You can vote by clicking the button below!**
  ──────────────────────────`)
  //.setImage(process.env.IMAGE_LINK)
  .setFooter("Thanks for voting!")
  .setColor("GREEN")
  let buttonurl = new MessageButton()
  .setStyle('url')
    .setURL(process.env.VOTE_LINK)
  .setLabel('Vote') 
  let website = new MessageButton()
  .setStyle('url')
    .setURL("http://ecoverse.ml/")
  .setLabel(`Go to website`) 
  .setDisabled(false);
  channel.send({ buttons: [buttonurl, website], embed: embed })
});
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((f) => {
    if (!f.endsWith(".js")) return;
    const event = require(`./events/${f}`);
    let eventName = f.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((f) => {
    if (!f.endsWith(".js")) return;
    let command = require(`./commands/${f}`);
    client.commands.set(command.help.name, command);
    command.help.aliases.forEach((alias) => {
      client.aliases.set(alias, command.help.name);
    });
  });
});

client.login(process.env.TOKEN);
