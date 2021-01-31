const inititalState = {
	search_user_loading: false,
	users: [],
};
export default function search_user_reducer(state = inititalState, action) {
	switch (action.type) {
		case 'search_user_loading':
			return { ...state, search_user_loading: true };
		case 'search_user_success':
			return { ...state, search_user_loading: false, users: [...action.payload.users] };
		case 'search_user_faliure':
            return { ...state, search_user_loading: false };
            case "reset_search_user_state":
                return {...state,search_user_loading:false,users:[]}
		default:
			return state;
	}
}
