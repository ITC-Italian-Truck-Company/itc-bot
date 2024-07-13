module.exports = {
	name: 'notte',
	description: 'Channel help command',
	execute(message) {
   if(message.member.roles.cache.some(role => role.name === '@everyone' || '⭐staff')){
  	console.log('This member can use the command');
		message.react('😄');
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Finalmente è arrivato il momento di riposare le ossa",
      description: "Corri a letto Morfeo ti aspetta",
      fields: [{
        name: "Good Night",
        value: "Good Night Friend's"
      },
    ],
    image: {
        url: 'https://i.imgur.com/wnOHpz7.mp4',
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
