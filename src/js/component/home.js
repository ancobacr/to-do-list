import React, { useState } from "react";
import PropTypes from "prop-types";

function InputTask(/* { addTodo } */) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="what needs to be done?"
				className="input"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	);
}

function Todo(/* { todo, index, removeTodo } */) {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{todo.text}

			<div>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</div>
	);
}

export function ToDoList() {
	const [todos, setTodos] = useState([
		{
			text: "Learn about React",
			isCompleted: false
		}
	]);

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="container">
			<div className="">
				<InputTask addTodo={addTodo} />
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
	);
}
