const Discord = require('discord.js')

module.exports = {
  name: 'invite',

  run: async (client, message, args) => {
    const yt = new Discord.MessageEmbed()
      .setTitle('Version_0')
      .setDescription('`Link para o convite de entrada para o super Version_0!`\n_Um bot como você nunca viu antes!_\n_Atualizações constante_')
      .setFooter('Criado por 🐺 | Flop#8888')
      .setTimestamp()

    const buttons = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()

        .setStyle('LINK') // Não muda isso
        .setEmoji('🔗') // Coloque algum emoji
        .setLabel('INVITE') //Coloque um nome para o botão
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`) // Coloca algum link
    )

    message.channel.send({ embeds: [yt], components: [buttons] })
  }
}