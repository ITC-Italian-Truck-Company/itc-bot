// SETUP REQUIREMENTS
// require the discord.js module
const fs = require('fs');
const Discord = require('discord.js');
// require configuration file and passes prefix and token from it
const { prefix, token } = require('./config.json');

// create a new Discord client and take commands from commands collection
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// READY APPLICATION
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
	// Setting bot activity on discord
	client.user.setActivity('itc 2023');
});

// COMMANDS
client.on('message', async message => {
  // if author of message is a bot than ignore
	if (!message.content.startsWith(prefix) || message.author.bot) return;

  // sets guild ID - Guilds are basically the specific servers Italian Truck Company
	const guild = client.guilds.cache.get("1205620007682441367");

  // take command argument and name
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

  // if there is a matching command name in the command collection than return it
	if (!client.commands.has(commandName)) return;

  // handling of commands of higher complexity, with arguments check and error handling (to check)
	const command = client.commands.get(commandName);

	if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Reaction role
client.on("message", message => {
  if (message.content == "?regolamento") {
    var embed = new Discord.MessageEmbed() //Crea il tuo embed o messaggio normale
    .setTitle("REGOLAMENTO ITALIAN TRUCK COMPANY 2023")
    .setDescription("Clicca sulla reazione per approvare il regolamento e ottenere il ruolo")

    message.channel.send(embed)
    .then(msg => {
      msg.react("🤟")
    })
}
})
client.on("messageReactionAdd", async function (messageReaction, user) {
  if (user.bot) return //Le reaction dei bot verranno escluse

  if (messageReaction.message.partial) await messageReaction.message.fetch();

  if (messageReaction._emoji.name == "🤟") {
    var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
    utente.roles.add("1205826039977222194"); //Settare ruolo
  }
   
})
//Quando viene rimossa una reazione
client.on("messageReactionRemove", async function (messageReaction, user) {
  if (user.bot) return

  if (messageReaction.message.partial) await messageReaction.message.fetch();

  if (messageReaction._emoji.name == "🤟") {
    var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
    utente.roles.remove("1205826039977222194");
  }
})

// Comandi Kick / Ban 
client.on("message", (message) => {
  if (message.content.startsWith("?kick")) {
    var utenteKick = message.mentions.members.first();

    if (!message.member.hasPermission("KICK_MEMBERS")) {
      message.channel.send('Non sei autorizzato');
      return;
    }

    if (!utenteKick) {
      message.channel.send('Non hai menzionato nessun utente');
      return;
    }

    if (!message.mentions.members.first().kickable) {
      message.channel.send('Io non ho il permesso');
      return
    }

    utenteKick.kick()
    .then(() => message.channel.send("<@" + utenteKick + ">" + " espulso temporaneamente dal server"))

  }

  if (message.content.startsWith("?ban")) {
    var utenteBan = message.mentions.members.first();

    if (!message.member.hasPermission("BAN_MEMBERS")) {
      message.channel.send('Non sei autorizzato');
      return;
    }

    if (!utenteBan) {
      message.channel.send('Non hai menzionato nessun utente');
      return;
    }

    if (!utenteBan.kickable) {
      message.channel.send('Io non ho il permesso');
      return
    }

    utenteBan.ban()
    .then(() => message.channel.send("<@" + utenteBan + ">" + " è stato bannato"))

  }
})

//BENVENUTO
client.on("guildMemberAdd", (member) => {
  //console.log(member.guild); Per avere tutte le info del utente e del server
  client.channels.cache.get("1205771311960424508").send("Ciao " + member.toString() + " benvenuto in **" + member.guild.name + "**\rSei il **" + member.guild.memberCount + "° membro**");
})

//ADDIO
client.on("guildMemberRemove", (member) => {
  client.channels.cache.get("1205771311960424508").send("Ciao " + member.toString() + ", speriamo di rivederti presto!");
})

// Reaction role VTC Esterne
client.on("message", message => {
  if (message.content == "?esterno") {
    var embed = new Discord.MessageEmbed() //Crea il tuo embed o messaggio normale
    .setTitle("VTC ESTERNE REACTION ROLE")
    .setDescription("Se fai parte di una vtc esterna clicca sulla emoticon per ottenere il ruolo")

    message.channel.send(embed)
    .then(msg => {
      msg.react("👾")
    })
}
})
client.on("messageReactionAdd", async function (messageReaction, user) {
  if (user.bot) return //Le reaction dei bot verranno escluse

  if (messageReaction.message.partial) await messageReaction.message.fetch();

  if (messageReaction._emoji.name == "👾") {
    var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
    utente.roles.add("1205813917625098270"); //Settare ruolo
  }
   
})
//Quando viene rimossa una reazione
client.on("messageReactionRemove", async function (messageReaction, user) {
  if (user.bot) return

  if (messageReaction.message.partial) await messageReaction.message.fetch();

  if (messageReaction._emoji.name == "👾") {
    var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
    utente.roles.remove("1205813917625098270");
  }
})

// CLIENT LOGIN
client.login(token);