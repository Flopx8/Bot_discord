const {MessageEmbed} = require ("discord.js")
module.exports = {
  name: "bans",
  aliases: ["listban"],
  run: async (client, message, args) => {

   const flop = message.guild.bans.fetch()
   const flop_color = "WHITE"
   const flop_d = (await flop).map((flop) => flop.user.tag).join("\n") || "\`\`\`Ninguém foi banido\`\`\`"
    const flop2 = new MessageEmbed()
    .setTitle(':yes: | Lista de banidos')
    .setDescription(flop_d)
    .setColor(flop_color)
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL({dinamyc : true}))
    .setTimestamp(new Date())
    
    message.channel.send({embeds: [flop2]})
  }
  }