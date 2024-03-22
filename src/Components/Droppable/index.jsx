import { useDroppable } from "@dnd-kit/core";
import SortableItem from "../SortableItem";

const Droppable = ({ item }) => {
    // console.log("item = ",item);
    const {
        setNodeRef
    } = useDroppable({ id: item.id });

    return (
        <div
            ref={ setNodeRef }
            className='bg-white p-5 rounded-lg shadow-lg'
        >
            <h2 className='text-xl font-semibold'>{ item.name }</h2>
            <ul>
                {
                    item.tasks?.map( task => <SortableItem key={ task } task={ task } />)
                }
            </ul>
        </div>
    );
}

export default Droppable;