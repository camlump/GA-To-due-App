const Project = require('./ProjectModel')

const newProject = [
    {
        name: "project 3",
        
        time: 3/20/2020,

        todo: String,
        
        

    },
    {
        name: "project 2",
        
        time: 2/15/2020,

        todo: String,
        
        

    },
    {
        name: "project 1",
        
        time: 1/25/2020,

        todo: String,
        
        

    }
];

Project.deleteMany().then(()=>{
    return Project.create(newProject);
}).then(()=>{
    console.log('Database seeded')
})

