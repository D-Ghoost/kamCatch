import { createContext, useState, useEffect } from "react";
import getTasksInColumns from '../helpers';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    const [columns, setColumns] = useState([]);
    const [toDo, setToDo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);


        useEffect( () =>{
            setTimeout(() =>{
                const data = getTasksInColumns();
                setColumns(data);
                setToDo(data[0].tasks);
                setDoing(data[1].tasks);
                setDone(data[2].tasks);
            },2000);
        });

    return(
        <AppContext.Provider
            value={{
                columns,
                setColumns,
                toDo,
                setToDo,
                doing,
                setDoing,
                done,
                setDone
            }}
        >
            { children }
        </AppContext.Provider>
    )
}