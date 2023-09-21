require('dotenv').config();
const {REST, Routes} = require("discord.js");

const commands = [
    {
        name: "coin-flip",
        description: "Flips a coin, responding heads or tails!",
    },
];

const rest = new REST({ version: "10"}).setToken(process.env.BOT_TOKEN);


async function commandRegistration() {
    try {
        console.log("Registering commands...");

        await rest.put(
           Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
           { body: commands}
        )

        console.log("Commands registered successfully!");
    } catch (error) {
        console.log(`There was a ${error}`);
    }
};

commandRegistration();