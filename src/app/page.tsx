"use client";

import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "@/components/Draggable";
import { Droppable } from "@/components/Droppable";

export default function App() {
	const [items, setItems] = useState({
		A: [
			{ id: "1", content: "Card 1" },
			{ id: "2", content: "Card 2" },
		],
		B: [{ id: "3", content: "Card 3" }],
		C: [{ id: "4", content: "Card 4" }],
	});

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active.id !== over.id) {
			const sourceContainer = getContainerFromId(active.id);
			const targetContainer = over.id;
			const item = items[sourceContainer].find((i) => i.id === active.id);

			if (item) {
				setItems((prevItems) => {
					const newSourceContainer = prevItems[sourceContainer].filter(
						(i) => i.id !== active.id
					);
					const newTargetContainer = [...prevItems[targetContainer], item];

					return {
						...prevItems,
						[sourceContainer]: newSourceContainer,
						[targetContainer]: newTargetContainer,
					};
				});
			}
		}
	};

	const getContainerFromId = (id) => {
		return Object.keys(items).find((key) =>
			items[key].some((item) => item.id === id)
		);
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div style={{ display: "flex", gap: "10px" }}>
				{Object.keys(items).map((containerId) => (
					<Droppable key={containerId} id={containerId}>
						{items[containerId].map((item) => (
							<Draggable key={item.id} id={item.id}>
								{item.content}
							</Draggable>
						))}
					</Droppable>
				))}
			</div>
		</DndContext>
	);
}
