const { Guild, Client } = require("discord.js");
counter = 0;
module.exports = {
    name: "Author Only Voice Channel",
    author: ["zCuzImJonas#1010"],
    version: "0.1.0",
    changelog: "nothing", // THIS MOD WAS DOWNLOADED FROM DBS BOT LIST!
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
        <small>Currently <strong>Using Author Only Voice Channel mod v0.1.0</small> 
        <div class="form-group">
        <label><span style="font-weight: bold">Note:</span> You need BetterMods v2.0.0!<br> <span style="color: orange; font-weight: bold;">Any issues?</span>Please DM CuzImJonas#1010</label>
            <div class="form-group">
                <label>Channel Name: *</label>
                <textarea class="form-control needed-field" name="chname" rows="1" ></textarea>
                <div class="input-group-append">
                <a class="btn btn-outline-primary" role="button" id="variables" forinput="channelid">Insert Variable</a>
                </div>
            </div>
            <div class="form-group">
                <label>Catogory ID: *</label>
                <textarea class="form-control needed-field" name="chcatogory" rows="1" ></textarea>
                <div class="input-group-append">
                <a class="btn btn-outline-primary" role="button" id="variables" forinput="channelid">Insert Variable</a>
                </div>
            </div>
            <div class="form-group">
                <label>Role ID: *</label>
                <textarea class="form-control needed-field" name="chrole" rows="1"></textarea>
                <div class="input-group-append">
                <a class="btn btn-outline-primary" role="button" id="variables" forinput="channelid">Insert Variable</a>
                </div>
            </div>
        `;
    },
    init: function() {
        console.log(">> Loaded Edited Author Only Channel");
    },
    mod: function(DBS, message, action, args, command, index) {
        message.guild.channels.create(action.chname, {
            type: 'voice',
        }).then(channel => {
            channel.setParent(action.chcatogory);
            channel.updateOverwrite(message.guild.roles.everyone, {
                CONNECT: false
            })
            channel.updateOverwrite(message.author.id, {
                CONNECT: true,
                SPEAK: true
            })
            channel.updateOverwrite(action.chrole, {
                CONNECT: true,
                SPEAK: true
            })
        });
        DBS.callNextAction(command, message, args, index + 1);
    }
};
