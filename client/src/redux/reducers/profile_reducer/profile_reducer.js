const initialState = {
	user: {},
	posts: [],
	fetch_profile_loading: false,
	edit_profile_photo_loading: false,
};
export default function profile_reducer(state = initialState, action) {
	switch (action.type) {
		case 'fetch_profile_loading':
			return { ...state, fetch_profile_loading: true };
		case 'fetch_profile_success':
			return {
				...state,
				fetch_profile_loading: false,
				user: action.payload.user,
				posts: action.payload.posts,
			};
		case 'fetch_profile_faliure':
			return { ...state, fetch_profile_loading: false };
		case 'edit_profile_photo_loading':
			return { ...state, edit_profile_photo_loading: true };
		case 'edit_profile_photo_success':
			return { ...state, edit_profile_photo_loading: false, user: action.payload.user };
		case 'edit_profile_photo_faliure':
			return { ...state, edit_profile_photo_loading: false };
		case 'reset_profile_state':
			return initialState;
		case 'user_followed':
			return { ...state, user: action.payload.user };
		case 'user_unfollowed':
			return { ...state, user: action.payload.user };
		
		case 'delete_post_success':
			return {
				...state,
				delete_post_loading: false,
				posts: state.posts.filter((post) => (post._id !== action.payload.postid ? post : null)),
				count: state.count - 1,
				hasMore: state.hasMore,
			};
		case 'delete_post_faliure':
			return { ...state, delete_post_loading: false };
		case 'post_liked':
			const posts_like = state.posts.map((post) =>
				post._id === action.payload.post._id ? action.payload.post : post
			);
			return {
				...state,
				posts: posts_like,
			};
		case 'post_unliked':
			const posts_unlike = state.posts.map((post) =>
				post._id === action.payload.post._id ? action.payload.post : post
			);
			return {
				...state,
				posts: posts_unlike,
			};
		case 'comment_added':
			const post_comment_added = state.posts.map((post) =>
				post._id === action.payload.post._id ? action.payload.post : post
			);
			return {
				...state,
				posts: post_comment_added,
			};
		case 'comment_deleted':
			const post_comment_deleted = state.posts.map((post) =>
				post._id === action.payload.post._id ? action.payload.post : post
			);
			return {
				...state,
				posts: post_comment_deleted,
			};
		default:
			return state;
	}
}
