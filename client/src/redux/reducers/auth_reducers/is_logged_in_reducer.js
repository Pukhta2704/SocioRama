const inititalState = {
	is_logged_in_loading: false,
	_id: null,
};
export default function is_logged_in_reducer(state = inititalState, action) {
	switch (action.type) {
		case 'signed_up_successfully':
			return { ...state, _id: action.payload._id };
		case 'signed_in_successfully':
			return { ...state, _id: action.payload._id };
		case 'is_logged_in_loading':
			return { ...state, is_logged_in_loading: true };
		case 'is_logged_in_success':
			return { ...state, _id: action.payload._id, is_logged_in_loading: false };
		case 'is_logged_in_faliure':
			return {...state,is_logged_in_loading:false};
		default:
			return state;
	}
}
