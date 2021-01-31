const inititalState = {
	sign_in_loading: false,
};
export default function sign_in_reducer(state = inititalState, action) {
	switch (action.type) {
		case 'sign_in_loading':
			return { ...state, sign_in_loading: true };
		case 'sign_in_success':
			return { ...state, sign_in_loading: false };
		case 'sign_in_faliure':
			return { ...state, sign_in_loading: false };
		default:
			return state;
	}
}
