const inititalState = {
	sign_up_loading: false,
};
export default function sign_up_reducer(state = inititalState, action) {
	switch (action.type) {
		case 'sign_up_loading':
			return { ...state, sign_up_loading: true };
		case 'sign_up_success':
			return { ...state, sign_up_loading: false };
		case 'sign_up_faliure':
			return { ...state, sign_up_loading: false };
		default:
			return state;
	}
}
