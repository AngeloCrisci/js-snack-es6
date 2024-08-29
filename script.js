console.log('JS OK')

//*SNACK 1*
//Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
//Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

const tableName = 'tavolo vip';

const guestes = [
    { tableName: tableName, guestName: 'Brad Pitt'},
    { tableName: tableName, guestName: 'Johnny Depp'},
    { tableName: tableName, guestName: 'Lady Gaga'},
    { tableName: tableName, guestName: 'Cristiano Ronaldo'},
    { tableName: tableName, guestName: 'Georgina Rodriguez'},
    { tableName: tableName, guestName: 'Chiara Ferragni'},
    { tableName: tableName, guestName: 'George Clooney'},
    { tableName: tableName, guestName: 'Amal Clooney'},
    { tableName: tableName, guestName: 'Fedez'},
    { tableName: tableName, guestName: 'Amadeus'},
    { tableName: tableName, guestName: 'Fiorello'},
]



const logGuestes = ( guest, index ) => {
    let place = index + 1;
 console.log("tavolo:"+guest.tableName + " ospite:"+guest.guestName + " posizione:" + place)
};

guestes.forEach(logGuestes);


//*SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...

//* 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);

const students = [
    {
      id: 213,
      name: 'Marco della Rovere',
      grades: 78,
    },
    {
      id: 2,
      name: 'Michele Papagni',
      vote: 7
    },
    {
      id: 3,
      name: 'Fabio Forghieri',
      vote: 7
    },
    {
      id: 4,
      name: 'Filippo Mangione',
      vote: 7
    },
    {
      id: 5,
      name: 'Marco Lanci',
      vote: 10
    },
  ];