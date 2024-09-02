console.log('JS OK')

// *Crea un array di oggetti che rappresentano degli animali.
// *Ogni animale ha un nome, una famiglia e una classe.

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'topo', famiglia: 'roditori', classe: 'mammiferi' },
    { nome: 'falco', famiglia: 'falconidea', classe: 'uccelli' },
]

// Crea un nuovo array con la lista dei mammiferi.

const filteredAnimals = animals.filter((animal) => {
    return animal.classe === 'mammiferi';
})

console.log(filteredAnimals)

// * Crea un array di oggetti che rappresentano delle persone.
// * Ogni persona ha un nome, un cognome e un'età.

// * Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const students = [
    { nome: 'franco', cognome: 'frossi', età: 8 },
    { nome: 'marco', cognome: 'bianchi', età: 12 },
    { nome: 'simona', cognome: 'neri', età: 30 },
    { nome: 'luca', cognome: 'gialli', età: 60 },
    { nome: 'peppe', cognome: 'verdi', età: 80 },
    { nome: 'gina', cognome: 'viola', età: 25 },
]

let studentsWhoCanDrive = students.forEach((student) =>{
    if(student.età > 17 & student.età < 70) 
    console.log(`il sottoscritto ${student.nome} ${student.cognome} può guidare`);

})

