import React, { Component } from 'react';
import {connect} from 'react-redux';
import Todos from './todos.component.js';
import {fetchUser} from '../actions/user.actions';

@connect((store) => {
	return {
		user: store.user.user
	}
})

export default class App extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchUser());
	}

	render(){
		const {user} = this.props;
		return (
			<div>
				<Todos name={user.name}/>
			</div>	
		)
	}
}