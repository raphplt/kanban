// components/Droppable.js

import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, children }) {
	const { isOver, setNodeRef } = useDroppable({ id });
	const style = {
		border: "1px solid gray",
		padding: "10px",
		minHeight: "100px",
		width: "200px",
		backgroundColor: isOver ? "lightgray" : "white",
	};

	return (
		<div ref={setNodeRef} style={style}>
			<h3>Column {id}</h3>
			{children}
		</div>
	);
}
