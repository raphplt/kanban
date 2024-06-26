"use client";

import { DndContext, rectIntersection } from "@dnd-kit/core";
import { useState } from "react";

export default function KanbanBoard() {
	return <DndContext collisionDetection={rectIntersection}></DndContext>;
}
