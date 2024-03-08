
import { SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import Task from "../Task";


const Column = ({ id, title, tasks }) =>{

    const { isOver, setNodeRef } = useDroppable({ id: id });

    const style = {
        opacity: isOver ? '0.5' : '1',
    }

    return (
        <article>
            <h2>{ title }</h2>
            <SortableContext id={ id } items={ tasks } >
                <ul ref={ setNodeRef } style={ style }>
                    {
                        tasks.map(( tsk, idx ) =>(
                            <Task key={ tsk.id } task={ tsk } />
                        ))
                    }
                </ul>
            </SortableContext>
        </article>
    );

}

export default Column;