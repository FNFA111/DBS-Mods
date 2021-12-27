module.exports = {
    name: "Set NSFW",
    author: ["qizzle Schnitzel#9271"],
    version: "0.0.1",
    changelog: "Nothing ~ qizzle",
    isEvent: false,
    isResponse: true,
    isMod: true,
    isAddon: false,
    section: "Channel Action",
    html: function(data) {
        return `
        <small>Currently <strong>Using Set NSFW v0.0.1</small> 
        <div class="form-group">
        <label><span style="font-weight: bold">Note:</span>Any Issues?<br> <span style="color: orange; font-weight: bold;">Any issues?</span>Please Contact qizzle Schnitzel#9271</label>
        </div>
        <hr>
        <style>
            #authormark { margin-top:5px; }
        </style>
        <div class="form-group">
            <textarea class="form-control needed-field" name="channelname" rows="1" placeholder="Text Channel Name"></textarea>
        </div>
        <div class="form-group">
            <select class="form-control" name="bool">
                <option value="true" selected>True</option>
                <option value="false" selected>False</option>
            </select>
            <label id="authormark">|| by qizzle Schnitzel#9271</label>
        </div
        `;
    },
    init: function() {
        console.log(">> Voice Channel Propeties Mod loaded. by qizzle");
    },
    mod: function(DBS, message, action, args, command, index) {
        var name = action.channelname;
        var guild = message.guild;
        const channel = guild.channels.cache.find((channel) => {
            return channel.name === name;
        })
        if (!channel) {
            return;
        }
        switch (action.bool) {
            case "true":
                channel.edit({ nsfw: true })
                break;
            case "false":
                channel.edit({ nsfw: false })
                break;
        }
        DBS.callNextAction(command, message, args, index + 1);
    }
};
