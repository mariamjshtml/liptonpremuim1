const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
var prefix = "+"


client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members"));
});

/////////////////////////
/////////////////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **+help-gn** ' ,' **اوامر عامة** ')
.addField('     **+help-ad**  ' ,' **اوامر ادارية** ')
.addField('     **+help-mu**  ' ,' **اوامر ميوزك** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "help-gn")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **soon** ' ,' **soon** ')
.addField('     **soon**  ' ,' **soon** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "help-ad")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **soon** ' ,' **soon** ')
.addField('     **soon**  ' ,' **soon** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "help-mu")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **soon** ' ,' **soon** ')
.addField('     **soon**  ' ,' **soon** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});
//finish help//

const antic = JSON.parse(fs.readFileSync('./antic.json', 'utf8'));
client.on("message", message =>{
if(!antic[message.author.id]) {
antic[message.author.id] = {
actions: 0
}}
})


client.on('guildMemberRemove', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "MEMBER_KICK") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 3
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 3) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 3
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});





client.on('roleDelete', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "ROLE_DELETE") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 3
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 3) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 3
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});




client.on('channelDelete', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "CHANNEL_DELETE") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 0
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 3) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 3
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});


client.on('roleCreate', alpha => {
alpha.guild.fetchAuditLogs().then( ac => {
var anti = ac.entries.first();
if(anti.action == "ROLE_CREATE") {
if(!antic[anti.executor.id]) {
antic[anti.executor.id] = {
actions: 4
};
} else { 
antic[anti.executor.id].actions+=1
if (antic[anti.executor.id].actions == 3) {
alpha.guild.members.get(anti.executor.id).ban("Griefing")
console.log("banned griefer 1")
antic[anti.executor.id].actions = 3
}
}
    }
    });
    fs.writeFile("./antic.json", JSON.stringify(antic) ,(err) =>{
        if (err) console.log(err.message);
    });
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members"));
});


client.login(process.env.BOT_TOKEN);
