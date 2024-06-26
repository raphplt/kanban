// components/Draggable.js

import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable({ id, children }) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	});
	const style = {
		...(transform
			? {
					transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
			  }
			: {}),
		padding: "10px",
		border: "1px solid black",
		borderRadius: "4px",
		backgroundColor: "lightblue",
		cursor: "grab",
		marginBottom: "10px",
	};

	return (
		<div ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{children}
		</div>
	);
}
