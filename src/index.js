const {Client, IntentsBitField, Emoji, ActivityType} = require("discord.js");
require('dotenv').config();
const {sayReply, listReply, quickReply} = require("./replyCommands.js");
const ytdl = require("ytdl-core");
const { coinFlip } = require("./slashCommands.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates,
    ],
});

client.on("ready", (c) => {
    console.log(`${c.user.tag} is now ready and online!`)
    client.user.setActivity({
        name: "you 😉",
        type: ActivityType.Watching,
    });
});



function interactionHandling(interaction) {
    if (!interaction.isChatInputCommand()) {
        return;
    }

    if (interaction.commandName === "coin-flip") {
        coinFlip(interaction);
    }
}

function messageHandling(msg) {
    if (msg.author.bot) {
        return;
    }

    const strippedMsg = msg.content.toLowerCase();

    if (strippedMsg.startsWith("say ")) {
        sayReply(msg);
    } else if (strippedMsg.startsWith("list ")) {
        listReply(msg);
    } else {
        quickReply(msg);
    }
};

client.on("messageCreate", messageHandling);
client.on("interactionCreate", interactionHandling);

client.login(process.env.BOT_TOKEN);