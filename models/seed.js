const Homework = require('./Homework')


const newHomeworks = [
    {
        name: 'html intro',

        date: '1/22/220'
    },
    {
        name: 'css intro',

        date: '1/24/220'
    },
    {
        name: 'JS intro',

        date: '1/30/220'
    }
]

// Creature.deleteMany().then(() => {
//     return Creature.create(newCreatures);
// }).then(() => {
//     console.log('Database seeded.');
// });
Homework.deleteMany().then(()=>{
    return Homework.create(newHomeworks);
}).then(()=>{
    console.log('database seeded')
})