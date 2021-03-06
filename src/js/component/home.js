import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

export const TodoList = () => {
	const [userInput, setUserInput] = useState(" ");
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

	const deleteTask = id => {
		task.splice(id, 1);
		setTask([...task]);
		setCount(count - 1);
	};

	return (
		<Container className="justify-content-center">
			<Container className="text-center mt-5">
				<Card style={{ width: "25rem" }}>
					<Card.Title>
						<span className="h1">Todo List</span>
					</Card.Title>

					<input
						className="mb-2 inputClass"
						placeholder="what needs to be done?"
						type="text"
						requiered
						value={userInput}
						onChange={e => setUserInput(e.target.value)}
						onKeyPress={e =>
							e.key === "Enter" ? handleInfo() : ""
						}
					/>
					{task.map((final, id) => (
						<span className="card-subtitle mb-4 claseTask" key={id}>
							{final}
							<Button
								variant="light"
								onClick={() => deleteTask(id)}>
								X
							</Button>
						</span>
					))}

					<Card.Footer>
						<p id="counter" className="text-muted ">
							{count} task's left
						</p>
					</Card.Footer>
				</Card>
			</Container>
		</Container>
	);
};
