const getTasksInColumns = () => {

    // Test
    // Aqui se realizaria el consumo de la API
    const columns = [
        { 
            id: "A",
            title: ' To Do ',
            tasks:[
                { id: 1, title: 'Task 1' },
                { id: 2, title: 'Task 2' },
                { id: 3, title: 'Task 3' }
            ] 
        },
        {
            id: "B",
            title: ' In Progress ',
            tasks:[
                { id: 4, title: 'Task 4' },
                { id: 5, title: 'Task 5' },
                { id: 6, title: 'Task 6' }
            ]
        },
        {
            id: "C",
            title: ' Done ',
            tasks:[
                { id: 7, title: 'Task 7' },
            ]
        }
    ]

    return columns;

};

export default getTasksInColumns;