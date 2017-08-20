import React, { Component } from 'react';
import Todos from './todos.component.js';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			name: 'Jaime',
			todos: [
				{
					id: '001',
					name: 'Take out trash',
					completed: false
				},
				{
					id: '002',
					name: 'Meal prep',
					completed: false
				},
				{
					id: '003',
					name: 'Groceries',
					completed: false
				}
			]
		}
	}

	render(){
		return (
			<div>
				<Todos />
			</div>	
		)
	}
}