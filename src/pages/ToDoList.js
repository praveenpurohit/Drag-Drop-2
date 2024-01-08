import React, { lazy, Suspense } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import { NavLink } from 'react-router-dom'

const Column = lazy(() => import("../Component/Card"));

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
        ...sourceCol,
        taskIds: newTaskIds,
    };
    return newColumn;
};

const ToDoList = () => {

    const [state, setState] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const sourceCol = state.columns[source.droppableId];
        const destinationCol = state.columns[destination.droppableId];

        if (sourceCol.id === destinationCol.id) {
            const newColumn = reorderColumnList(
                sourceCol,
                source.index,
                destination.index
            );

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setState(newState);
            return;
        }

        const startTaskIds = Array.from(sourceCol.taskIds);
        const [removed] = startTaskIds.splice(source.index, 1);
        const newStartCol = {
            ...sourceCol,
            taskIds: startTaskIds,
        };

        const endTaskIds = Array.from(destinationCol.taskIds);
        endTaskIds.splice(destination.index, 0, removed);
        const newEndCol = {
            ...destinationCol,
            taskIds: endTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol,
            },
        };

        setState(newState);
    };

    return (
        <>
            {/* Header */}
            <header className="header to_do_list_header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="top_bar">
                            <div className="image">
                                <NavLink to={"/"}>
                                    <img src="assets/img/logo.png" alt="logo" />
                                </NavLink>
                            </div>
                            <div className="icon">
                                <div className="box">
                                    <i className="fa-solid fa-user" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Cases Section */}
            <DragDropContext onDragEnd={onDragEnd}>
                <section className="cases_section">
                    <div className="container-fluid">
                        <div className="top_text text-center">
                            <h1>Cases</h1>
                        </div>
                        <div className="to_do_list">
                            <div className="row">
                                <Suspense fallback={<div>Loading...</div>}>
                                    {state.columnOrder.map((columnId) => {
                                        const column = state.columns[columnId];
                                        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

                                        return <Column key={columnId} column={column} tasks={tasks} />;
                                    })}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </section>
            </DragDropContext>
        </>
    )
}

const initialData = {
    tasks: {
        1: { id: 1, content: "Configure Next.js application" },
        2: { id: 2, content: "Configure Next.js and tailwind " },
        3: { id: 3, content: "Create sidebar navigation menu" },
        4: { id: 4, content: "Create page footer" },
        5: { id: 5, content: "Create page navigation menu" },
        6: { id: 1133, content: "Create page layout" },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "TO-DO",
            taskIds: [1, 2, 3, 4, 5, 6],
        },
        "column-2": {
            id: "column-2",
            title: "IN-PROGRESS",
            taskIds: [],
        },
        "column-3": {
            id: "column-3",
            title: "DONE",
            taskIds: [],
        },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
};

export default ToDoList;