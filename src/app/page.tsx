"use client";

import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "@/components/Draggable";
import { Droppable } from "@/components/Droppable";

export default function App() {
	const [items, setItems]: any = useState({
		A: [
			{ id: "1", content: "Card 1" },
			{ id: "2", content: "Card 2" },
		],
		B: [{ id: "3", content: "Card 3" }],
		C: [{ id: "4", content: "Card 4" }],
	});

	const handleDragEnd = (event: any) => {
		const { active, over } = event;
		if (active.id !== over.id) {
			const sourceContainer: any = getContainerFromId(active.id);
			const targetContainer = over.id;
			const item: any = items[sourceContainer].find(
				(i: any) => i.id === active.id
			);

			if (item) {
				setItems((prevItems: any) => {
					const newSourceContainer = prevItems[sourceContainer].filter(
						(i: any) => i.id !== active.id
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

	const getContainerFromId = (id: any) => {
		return Object.keys(items).find((key) =>
			items[key].some((item: any) => item.id === id)
		);
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div style={{ display: "flex", gap: "10px" }}>
				{Object.keys(items).map((containerId) => (
					<Droppable key={containerId} id={containerId}>
						{items[containerId].map((item: any) => (
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
