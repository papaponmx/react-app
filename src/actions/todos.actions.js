export const fetchTodos = () => ({
	type: 'FETCH_TODOS_FULFILLED',
	payload: [
		{
			id: '001',
			name: 'Do Groceries',
			completed: false
		},
		{
			id: '002',
			name: 'Go to the market',
			completed: true
		},
		{
			id: '003',
			name: 'Prepare meals',
			completed: false
		}
	]
});
