function coinFlip(interaction) {
    let ans = Math.floor(Math.random() *2);
    if (ans === 1) {
        interaction.reply("You rolled Heads!");
    } else {
        interaction.reply("You rolled Tails!");
    }
};

module.exports = {
    coinFlip,
}