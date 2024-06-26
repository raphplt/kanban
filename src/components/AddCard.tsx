"use client";

import React, { useState } from "react";

export default function AddCard({
	addCard,
}: {
	addCard: (title: string) => void;
}) {
	const [title, setTitle] = useState<string>("");

	return (
		<div className="flex ">
			<h1 className=" font-semibold">Card Title</h1>
			<input
				type="text"
				onChange={(e: any) => setTitle(e.target.value)}
				value={title}
			/>
			<button
				onClick={() => {
					setTitle("");
					addCard(title);
				}}
			>
				Add Card
			</button>
		</div>
	);
}
