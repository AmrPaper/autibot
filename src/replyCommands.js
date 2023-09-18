function sayReply(msg) {
    const content = msg.content.substring(4);
    const mess = content
        .split("")
        .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join("");
    msg.reply(`${mess} stfu`);   
}

function listReply(msg) {
    const content = msg.content.substring(5);
    const charlist = [...content];
    msg.reply(`There are ${charlist.length} characters in that message.`);
}

function quickReply(msg) {
    const commands = {
        hee3: "heeeee3 ya",
        ping: "pong",
        bing: "bong",
        goodmorning: "morn",
        mornin: "morn",
        morning: "morn",
        "good morning": "morn",
        "ya satir": "yaaa satir",
        "fr fr": "skull",
        insane: "skull",
        toxic: "skull",
    }

    const emoji = {
        skull: "💀",
        morn: "😘",
    }

    const response = commands[msg.content.toLowerCase()];
        if (response) {
            if (response === "morn") {
                msg.react(emoji[response]);
                msg.reply("Good morning!");
            }
            else if (response === "skull") {
                msg.react(emoji[response]);
            }
            else {
                msg.reply(response);
            }
        }
}

module.exports = {
    sayReply,
    listReply,
    quickReply,
}