//import React, { useEffect } from "react";
//import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
	//const dispatch = useDispatch();
	const todos = useSelector((s) => s.todos);
	console.log(todos);

	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
