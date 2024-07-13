module.exports = {
	name: 'giorno',
	description: 'Channel help command',
	execute(message) {
   if(message.member.roles.cache.some(role => role.name === '@everyone' || '⭐staff')){
  	console.log('This member can use the command');
		message.react('😄');
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Finalmente è arrivato il buongiorno",
      description: "era questo che aspettavi vero ?",
        fields: [{
          name: "Buongiorno",
          value: "Il buongiorno si vede dal mattino"
        },
        {
            name: "Ciao Amici",
            value: "La ITC vi augura il buongiorno"
        },
    ],
    image: {
        url: 'https://i.imgur.com/wopZQ9E.jpeg',
    },
       timestamp: new Date(),
        footer: {
         text: "© Lo Staff / Bitpredator - Gestore Discord & Sviluppatore ITC 2023"
        }
    }
  });
}
    else {
     console.log('This shiet should not use the command');
    }}
};
