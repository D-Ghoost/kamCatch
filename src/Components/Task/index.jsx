import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

const Task = ({ task }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ 
        id: task.title
    });

    const style = {
        transform: transform ? CSS.Translate.toString(transform) : undefined, 
        transition,
    };
    

    return (
        <li 
            ref={ setNodeRef }
            style={ style }
            {...attributes}
            {...listeners}  
        >
            { task.title }
        </li>
    );
}


export default Task ;