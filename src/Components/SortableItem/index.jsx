import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Draggable from "../Draggable";

const SortableItem = ({ task }) => {
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: task });
    
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <li
            ref={ setNodeRef }
            style={ style }
            { ...attributes }
            { ...listeners }
        >
            { task }
        </li>
    );
}

export default SortableItem;