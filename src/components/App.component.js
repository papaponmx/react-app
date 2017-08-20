import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todos from './todos.component.js';
import {fetchUser} from '../actions/user.actions';
import {fetchTodos} from '../actions/todos.actions';

@connect((store) => {
	return {
		user: store.user.user,
		todos: store.todos.todos
	}
})

export default class App extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchUser());
		this.props.dispatch(fetchTodos());
	}

	render(){
		const {user, todos} = this.props;
		return (
			<div>
				<Todos name={user.name} todos={todos}/>
			</div>	
		)
	}
}