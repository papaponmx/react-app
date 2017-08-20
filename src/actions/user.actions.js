export const fetchUser = () => ({
	type: 'FETCH_USER_FULFILLED',
	payload: {
		name: 'John',
		age: 24
	}
});