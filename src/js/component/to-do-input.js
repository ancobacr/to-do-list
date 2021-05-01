import React, { useState } from "react";

export function ToDoInput({ addTodo }) {
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
