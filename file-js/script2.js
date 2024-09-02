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