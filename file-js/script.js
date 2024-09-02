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

const students = [
    {
      id: 213,
      name: 'Marco della Rovere',
      grades: 78,
    },
    {
      id: 110,
      name: 'Paola Cortellessa',
      vote: 96,
    },
    {
      id: 250,
      name: 'Andrea Mantegna',
      vote: 48,
    },
    {
      id: 145,
      name: 'Gaia Borromini',
      vote: 74,
    },
    {
      id: 196,
      name: 'Luigi Grimaldello',
      vote: 68,
    },
    {
      id: 102,
      name: 'Piero della Francesca',
      vote: 50,
    },
    {
      id: 120,
      name: 'Francesca da Polenta',
      vote: 84,
    },
  ];
  
//* 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);

const studentNames = students.map((student) => {
    return `${student.name.toUpperCase()}`
}
)
console.log(studentNames)

//* 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

const studentVoteOver70 = students.filter ((student => student.vote > 70 ));
console.log(studentVoteOver70);

//* 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const studentOver70and120 = students.filter((student => student.vote > 70 & student.id > 120));

console.log(studentOver70and120);

//* SNACK 3*
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  { bikeName: 'Graziella' , weight: 9 },
  { bikeName: 'Triban' , weight: 6.8},
  { bikeName: 'Scott' , weight: 8},
  { bikeName: 'Fiido' , weight: 9},
];

let lessWeightBike = bikes[0];

for(const bike of bikes ){
  if (bike.weight < lessWeightBike.weight){
  
  lessWeightBike = bike;
  }
}

const  {bikeName , weight} = lessWeightBike;


console.log(`La bici più leggere è la ${bikeName} con il peso ${weight}`)


// *SNACK 4*
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo la mia ARRAY di OBJECTS
const teams = [
  {teamName: 'Barcelona' , points: 0, faulTaken: 0},
  {teamName: 'Real Madrid' , points: 0, faulTaken: 0},
  {teamName: 'Roma' , points: 0, faulTaken: 0},
  {teamName: 'Juventus' , points: 0, faulTaken: 0},
  {teamName: 'Napoli' , points: 0, faulTaken: 0},
]

const GetRandomNumbers = (min , max) => {
  return Math.floor(Math.random()  * (max - min  + 1) + min)
};

for (let team of teams){
  team.points = GetRandomNumbers (1 , 20);
  team.faulTaken = GetRandomNumbers (1 , 20);
}

// const teamFauls = teams.map(({teamName , faulTaken}) => ({teamName , faulTaken}));


const teamFauls = teams.map((team) => `${team.teamName} ${team.faulTaken}`);

console.log(teamFauls);

