import React, { Component } from 'react';
import Todo from './todo.component';

export default class Todos extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.name} is about TODO something</h1>
			</div>
		);
	}
}