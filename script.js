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

const logGuestes = ( guest , place ) => {
 console.log(guest)
};

guestes.forEach(logGuestes);