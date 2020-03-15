const Homework = require('./HomeworkModel')

const newHomeworks = [
    {
        name:'React Homework',
        time: '3/6/2020',
        todo: "Finish",
    },
    {
        name:'CSS Homework',
        time: '3/19/2020',
        todo: 'Finish styling profile page',
    },
    {
        name:'Python Homework',
        time: '3/16/2020',
        tod0: 'Finish for loop practice',
    },
];

Homework.deleteMany().then(()=>{
    return Homework.create(newHomeworks);
}).then(()=>{
    console.log('Database seeded.')
})