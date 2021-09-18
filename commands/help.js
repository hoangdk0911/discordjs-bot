const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `connect\`\` - join the voice channel you are in
   disconnect\`\` - leave the voice channel you are in
   p <Song Name or url>\`\` - chơi em đi nào
   pause\`\` - ngưng xíu anh ơi cho em thở
   resume\`\` - chơi lại anh ơi
   queue\`\` - xem list em gái
   skip\`\` - đổi em
   skipto <Target number>\`\` - Đổi tới em thứ ...
   stop\`\` - nghỉ nha anh em mệt
   volume <volume count or none>\`\` - see or adjust volume of songs
   np\`\` - see now playing song
   lyrics\`\` - get lyrics of current song
   shuffle\`\` - shuffle and randomize the queue
   invite\`\` - get invite link for the bot
   loop\`\` - enable / disable loop for the currently playing song
   remove <Target number>\`\` - remove a song from the queue
   chat\`\` tán gẫu nào
   help\`\` - to see this command`;

  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "MusicBot Commands Help",
        "https://img.icons8.com/color/2x/services--v2.gif"
      )
      .setColor("FFFBFB")
      .setTimestamp()
      .setDescription(revised)
  );
};
