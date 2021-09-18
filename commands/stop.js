const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "You must Join a voice channel before using this command!"
    );
  let queue = message.client.queue.get(message.guild.id);
  if (!queue)
    return message.channel.send(
      new MessageEmbed()
        .setDescription(":x: There are no songs playing in this server")
        .setColor("RED")
    );
  queue.connection.dispatcher.end();
  queue.queue = [];
  return message.channel.send(
    new MessageEmbed()
      .setDescription("**Nghỉ nha đúi gòi :white_check_mark: **")
      .setColor("BLUE")
  );
};
