module.exports = {
TOKEN: "OTA0MDAzNjA3NzM1Njk3NDA4.YX1M9w.7-LDhtyPTu3I4W-CbzN3LJw97U8",
ownerID: "JaniHegedus#5359", //write your discord user id.
botInvite: "", //write your discord bot invite.
supportServer: "", //write your discord bot support server invite.
mongodbURL: "mongodb+srv://JaniHegedus:rvPd8f89c0ijMD2c@cluster0.1n3wjro.mongodb.net/?retryWrites=true&w=majority", //write your mongodb url.
status: '❤️ Music',
commandsDir: './commands', //Please don't touch
language: "hu", //en, tr, nl, pt, fr, ar, zh_TW, it, hu
embedColor: "ffa954", //hex color code
errorLog: "944213969323851836", //write your discord error log channel id.
  
    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },
  
   shardManager:{
     shardStatus: false //If your bot exists on more than 1000 servers, change this part to true.
   },

    playlistSettings:{
        maxPlaylist: 10, //max playlist count
        maxMusic: 75, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000000, //1000 = 1 second
},

},

maxVol: 150, //You can specify the maximum volume level.

}
}
