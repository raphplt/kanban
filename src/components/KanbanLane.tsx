"use client";

import { Cards } from "@/types/types";
import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface KanbanLaneProps {
	title: string;
	items: Cards[];
}

const KanbanItem = ({
	title,
	index,
	parent,
}: {
	title: string;
	index: number;
	parent: string;
}) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: title,
		data: {
			title,
			index,
			parent,
		},
	});

	console.log(CSS.Translate.toString(transform));

	const style = {
		transform: CSS.Translate.toString(transform),
	};
	return (
		<div
			className="bg-white p-2 rounded-md shadow-md cursor-pointer"
			{...listeners}
			{...attributes}
			ref={setNodeRef}
		>
			<p>{title}</p>
		</div>
	);
};

export default function KanbanLane({ title, items }: KanbanLaneProps) {
	const { setNodeRef } = useDroppable({
		id: title,
	});

	return (
		<div className="flex flex-col gap-2">
			<h1 className=" font-semibold">{title}</h1>
			<div ref={setNodeRef} className="flex flex-col gap-2">
				{items.map(({ title: cardTitle }, key) => (
					<KanbanItem title={cardTitle} key={key} index={key} parent={title} />
				))}
			</div>
		</div>
	);
}
