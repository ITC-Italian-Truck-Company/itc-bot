module.exports = {
	name: 'social',
	description: 'Channel help command',
	execute(message) {
   if(message.member.roles.cache.some(role => role.name === '@everyone' || '⭐staff')){
  	console.log('This member can use the command');
		message.react('😄');
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Italian Truck Company 2023 Official Discord - Socials",
      description: "Unisciti alla community della ITC anche sui social Ufficiali",
        fields: [{
          name: "Twitch",
          value: "Vieni a trovarci su: [Twitch](https://www.twitch.tv/italiantruckcompany2023)"
        },
        {
          name: "TruckersMP",
			    value: "Vieni a trovarci su: [TruckerMP](https://truckersmp.com/vtc/60781)"
        },
        {
          name: "Twitter",
			    value: "Vieni a trovarci su: [Twitter](https://twitter.com/italiantruck23)"
        },
        {
          name: "Truckyapp",
			    value: "Vieni a trovarci su: [Truckyapp](https://e.truckyapp.com/vtc/italian-truck-company-2023)"
        },
        {
          name: "TrucksBook",
			    value: "Vieni a trovarci su: [TrucksBook](https://trucksbook.eu/company/168755)"
        },{
          name: "TiKTok",
			    value: "Vieni a trovarci su: [TitTok](https://www.tiktok.com/@itc2023vtc)"
        },
        {
          name: "Instagram",
			    value: "Vieni a trovarci su: [Instagram](https://www.instagram.com/italiantruckcompany2023/)"
        },
        { 
          name: "Sito Web",
          value: "leggi tutte le info sul nostro sito https://itc-italian-truck-company.github.io/itc2023/"
        }
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
