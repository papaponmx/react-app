import { applyMiddleware, createStore} from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
	fetching: false,
	fetched: false,
	posts: [],
	error: null
}

const reducer = function(state = initialState, action) {
	switch(action.type){
		case 'FETCH_POSTS_START' : {
			return {...state, fetching: true }
			break;
		}
		case 'FETCH_POSTS_ERR': {
			return {...state, fetching: false, error: action.payload }
			break;
		}
		case 'RECIEVE_POSTS': {
			return {...state, fetching: false, fetched: true, posts: action.payload }
			break;
		}
	}
	return state;
}

const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducer, middleware);

store.dispatch(function(dispatch) {
	dispatch({
		type: 'FETCH_POSTS_START'
	});
	axios.get('http://jsonplaceholder.typicode.com/posts')
		.then((res) => {
			dispatch({
				type: 'RECIEVE_POSTS',
				payload: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: 'FETCH_POSTS_ERROR',
				payload: err
			});
		});
});