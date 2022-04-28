const {
  Client,
  Message,
  MessageEmbed,
  DiscordAPIError,
} = require("discord.js");

module.exports = {
  name: "clear",
  aliases: ["limpar"],

  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply(
        `${message.author} **Voce não possui permissão para esse comando.**`
      );

    try {
      let delamount = args[0];
      let msg_del = parseInt(delamount) + 1;

      let incomplet = new MessageEmbed()
        .setTitle(`Comandos de Clear`)
        .setColor("#2F3136")
        .setDescription(
          `**\n> Descrição: Utilize esse comando para limpar o chat.\n\n> Como usar? Use da seguinte forma: ssl__clear (mensagens) \n\n>  Exemplo: ssl_clear 10**`
        );
      if (isNaN(delamount) || parseInt(delamount <= 0))
        return message.reply({ embeds: [incomplet] });

      if (parseInt(delamount) > 99)
        return message.reply(">  **Voce só pode limpar 1 a 99 mensagens!**");

      await message.channel.bulkDelete(parseInt(delamount) + 1, true);

      let clear = new MessageEmbed()
        .setColor("GREEN")
        // .setImage(`https://cdn.discordapp.com/attachments/964173844942307338/967318432292962325/standard_8.gif?size=4096`)
        .setImage(
          `https://cdn.discordapp.com/attachments/969097705697718293/969163441162043412/rick_and_morty.gif?size=128`
        )
        .setDescription(
          `**> Foi limpo ${delamount} mensagens.\n> Faxineiro: ${message.author}**`
        )

        .addFields({
          name: "\n>",
          value: "```ini\n [LIMPEZA CONCLUÍDA]```",
          inline: true,
        });

      await message.channel.send({ embeds: [clear] });
    } catch (e) {
      console.log(e);
    }
  },
};
