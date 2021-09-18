const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const hardMessage = {
    F4T: 'Phắc boi có tiếng, làm gì vậy mấy thanh niên?',
    Hoàng: 'thông minh nhất channel'
}
const secrets = ['Hoàng', 'hoang'];

exports.run = async (client, message) => {
    try {
        let text = message.content.replace('!chat ', '');
        let result;
        if (secrets.some(e => text.toLowerCase().includes(e.toLowerCase()))) {
            result = 'Bí mật quốc gia';
        } else if (hardMessage[text]) {
            result = hardMessage[text];
        } else {
            let response = await axios.get(`https://api.simsimi.net/v2/`, {
                params: {
                    text,
                    lc: 'vn'
                }
            });
            result = response.data.success
        }

        return message.channel.send(
            new MessageEmbed()
                .setDescription(result)
                .setColor("BLUE")
        );
    } catch (e) {
        console.log(e);
    }


};
