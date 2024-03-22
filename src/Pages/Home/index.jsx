import React from 'react';
import { 
    DndContext, 
    KeyboardSensor, 
    PointerSensor, 
    closestCenter, 
    useSensor, 
    useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
// import SortableItem from '../../Components/SortableItem';
import Droppable from '../../Components/Droppable';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';





const Home = () => {

    const [items, setItems] = React.useState([
        {
            name: 'Do',
            id: 'do',
            tasks: [
                'Task 1',
                'Task 2',
                'Task 3',
                'Task 4',
                'Task 5'
            ]
        },
        {
            name: 'Doing',
            id: 'doing',
            tasks: [
                'Task 6',
                'Task 7',
                'Task 8',
                'Task 9',
                'Task 10'
            ]
        },
        {
            name: 'Done',
            id: 'done',
            tasks: [
                'Task 11',
                'Task 12',
                'Task 13',
                'Task 14',
                'Task 15'
            ]
        }
    ]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = ({ over, active }) =>{
        if(active.id !== over.id){
            console.log("active = ",active.id);
            console.log("over = ",over.id);
            setItems((items) => {
                console.log("items = ",items);
                const oldIndex = items.tasks.indexOf(active.id);
                const newIndex = items.tasks.indexOf(over.id);
                console.log("oldIndex = ",oldIndex);
                console.log("newIndex = ",newIndex);
                
                return arrayMove(items, oldIndex, newIndex);
        } )
        }
        
    }

    return (
        <DndContext
            sensors={ sensors }
            collisionDetection={ closestCenter }
            onDragEnd={ handleDragEnd }    
        >
            <SortableContext
                items={ items }
                strategy={ verticalListSortingStrategy }
            >
                <section className='flex gap-10'>
                {
                    items.map( item => <Droppable key={ item.name } item={ item } />)
                }    
                </section>
            </SortableContext>
        </DndContext>
    );
}

export default Home;