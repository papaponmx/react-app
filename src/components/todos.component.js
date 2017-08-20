import React, { Component } from 'react';
import Todo from './todo.component';

export default class Todos extends Component {
	render() {
		let todoNodes = this.props.todos.map(function(todo) {
			return (
				<Todo name={todo.name} key={todo.id}>
					{todo.name}
				</Todo>
			)
		});
		return (
			<div>
				<h1>{this.props.name} is about TODO something</h1>
				{todoNodes}			
			</div>
		);
	}
}