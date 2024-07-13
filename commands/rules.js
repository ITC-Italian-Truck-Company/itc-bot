module.exports = {
	name: 'rules',
	description: 'Channel help command',
	execute(message) {
   if(message.member.roles.cache.some(role => role.name === '@everyone' || '⭐staff')){
  	console.log('This member can use the command');
		message.react('😄');
    message.channel.send({embed: {
      color: 0xff0000,
      title: "Italian Truck Company 2023 Regolamento ufficiale",
      description: "Per favore prendi visione del nostro regolamento - Accettando il regolamento si dichiara di essere maggiorenni",
        fields: [{
          name: "Regolamento",
          value: "Il nostro gruppo ITC2023 (ITALIAN TRUCK COMPANY 2023) è finalizzato al divertimento, essendo soprattutto un gioco, non deve diventare un lavoro L'obbiettivo principale è avanzare i più possibile nella classifica Reali: inferiore ai 100 km/h, chiarito questo si pongono delle regole al fine di mantenere nel gruppo un clima distensivo e disteso, sereno e divertente"
        },
        {
            name: "1)",
            value: "Massimo rispetto fra le persone, niente offese verso nessuno; si dovrà usare il buon senso costruttivo e non distruttivo, considerando che si ha a che fare con persone di cui conosciamo, nella maggior parte dei casi, solo la voce."
        },
        {
            name: "2)",
            value: "In azienda è richiesto il rispetto per il codice stradale, (non causare volutamente incidenti stradali), nè a membri aziendali nè ad altri"

        },
        {
            name: "3)",
            value: "L'uso del DISCORD non è strettamente obbligatorio; è però vivamente consigliato in quanto permette di conoscerci, stare insieme e magari divertirci."
        },
        {
            name: "4)",
            value: "In ogni chat con molti giocatori presenti si dovrà prestare attenzione a non sovrapporre i discorsi l'uno con l'altro, attendere invece, come suggerisce la buona educazione, che l'interlocutore precedente abbia terminato di parlare."
        },
        {
            name: "5)",
            value: "L'uso di termini scurrili (parolacce, imprecazioni varie) non è gradito e le bestemmie sono tassativamente proibite."
        },
        {
            name: "6)",
            value: "In caso di discussioni fra due o più giocatori riguardanti il gioco, contattare lo staff in assistenza per trovare una soluzione amichevole."
        },
        {
            name: "7)",
            value: "Il reclutamento di nuovi giocatori è, ovviamente, bene accetto da tutti, previo consenso dello staff aziendale, dopo un periodo di prova verrà valutata l'assunzione definitiva in azienda"
        }
    ],
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
