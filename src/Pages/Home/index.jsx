import React from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core'; 
import { AppContext } from '../../Context';
import Column from '../../Components/Column';




const Home = () => {

    const {
        columns, 
        toDo,
        setToDo, 
        doing, 
        setDoing, 
        done, 
        setDone } = React.useContext(AppContext);

    const identifyColumn = {
        'A': toDo,
        'B': doing,
        'C': done
    }

    const handleDragOver =(event) => {
        const { active, over } = event;

        console.log('drag over');
        console.log(`over = ${over.id}`);
    }

    const handleDragEnd = () => {
        console.log('drag end');
    }

    return (
        <DndContext 
            collisionDetection={ closestCenter }
            onDragOver={ handleDragOver }
            onDragEnd={ handleDragEnd }
        >
            <section className='flex gap-10'>
                {
                    columns.map(( column ) =>(
                        <Column 
                            key={ column.id }
                            id={ column.title }
                            title={ column.title }
                            tasks={ identifyColumn[column.id] }
                        />
                    ))
                }
            </section>
        </DndContext>
    );
}

export default Home;