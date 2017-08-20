const initialState = {
	todos: [],
	fetching: false,
	fetched: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_TODOS':
			return {...state, fetching: true }
		case 'FETCH_TODOS_REJECTED': 
			return { ...state, fetching: false, error: action.payload }
		case 'FETCH_TODOS_FULFILLED':
			return { ...state, fetching: false, fetched: true, fetched: true, todos: action.payload }
			default:
				return state;
		}
}