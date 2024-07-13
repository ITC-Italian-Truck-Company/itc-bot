module.exports = {
	name: 'invito',
	description: 'Channel help command',
	execute(message) {
   if(message.member.roles.cache.some(role => role.name === '@everyone' || '⭐staff')){
  	console.log('This member can use the command');
		message.react('😄');
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Italian Truck Company 2023 Official Discord",
      description: "Link discord Ufficiale https://discord.com/invite/9vCpUQpXrC",
        fields: [{
          name: "Discord",
          value: "Con il seguente link potrai invitare i tuoi amici"
        },
    ],
       timestamp: new Date(),
        footer: {
         text: "© Bitpredator - Gestore Discord & Sviluppatore ITC 2023"
        }
    }
  });
}
    else {
     console.log('This shiet should not use the command');
    }}
};
