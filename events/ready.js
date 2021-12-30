module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
  client.user.setActivity(`[𝙦 𝙝𝙚𝙡𝙥 ] , ${client.guilds.cache.size} sunucuya hizmet veriliyor. Niceinmak tarafından hazırlandı`);
};
