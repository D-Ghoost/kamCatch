import { useDraggable } from "@dnd-kit/core"

const Draggable = ({ name }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform
    } = useDraggable({ id: name });

    const style = {
        transform: CSS.Translate?.toString(transform),
    }

    return(
        <li
            ref={ setNodeRef }
            style={ style }
            { ...attributes }
            { ...listeners }
        >
            { name }
        </li>
    );
}

export default Draggable;