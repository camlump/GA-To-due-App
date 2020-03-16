const Homework = require('./HomeworkModel')

const newHomeworks = [
    {
        name:'React Homework',
        time: '3/6/2020',
        todo: "Finish",
    },
    
   
];

Homework.deleteMany().then(()=>{
    return Homework.create(newHomeworks);
}).then(()=>{
    console.log('Database seeded.')
})