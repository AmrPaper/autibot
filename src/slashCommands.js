function coinFlip(interaction) {
    let ans = Math.floor(Math.random() *2);
    if (ans === 1) {
        interaction.reply("You rolled Heads!");
    } else {
        interaction.reply("You rolled Tails!");
    }
};

function diceRoll(interaction) {
    let ans = Math.floor((Math.random() *6)+1);
    interaction.reply(`You rolled a ${ans}!!`);
};

module.exports = {
    coinFlip,
    diceRoll,
}