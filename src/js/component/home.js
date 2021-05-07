import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";

export const TodoList = () => {
	const [userInput, setUserInput] = useState("");
	const [task, setTask] = useState([]);
	const [count, setCount] = useState(0);

	const handleInfo = () => {
		if (userInput != null) {
			let newArray = [...task, userInput];
			setTask(newArray);
			setUserInput(" ");
			setCount(count + 1);
		}
	};

	const removeTask = id => {
		task.splice(id, 1);
		setTask([...task]);
		setCount(count - 1);
	};

	return (
		<Container>
			<Card>
				<Card.Title>
					<span className="h1">Todo List</span>
				</Card.Title>
				<input
					className="mb-2 inputClass"
					placeholder="Add Task"
					type="text"
					requiered
					value={userInput}
					onChange={e => setUserInput(e.target.value)}
					onKeyPress={e => (e.key === "Enter" ? handleInfo() : "")}
				/>
				{task.map((final, id) => (
					<span className="card-subtitle mb-4 claseTask" key={id}>
						{final}
						<button onClick={() => removeTask(id)}>X</button>
					</span>
				))}
				<p id="counter" className="">
					{count} task's left
				</p>
			</Card>
		</Container>
	);
};
