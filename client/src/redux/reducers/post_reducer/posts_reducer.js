const inititalState = {
	posts: [],
	first_time_fetched: false,
	count: 0,
	hasMore: true,
	fetch_posts_loading: false,
	create_post_loading: false,
};
export default function posts_reducer(state = inititalState, action) {
	switch (action.type) {
		case 'fetch_posts_loading':
			return { ...state, fetch_posts_loading: true };
		case 'fetch_posts_success':
			return {
				...state,
				first_time_fetched: true,
				fetch_posts_loading: false,
				posts: [...state.posts, ...action.payload.posts],
				count: action.payload.posts.length === 0 ? 0 : state.count + 5,
				hasMore: action.payload.posts.length === 0 ? false : true,
			};
		case 'fetch_posts_faliure':
			return { ...state, fetch_posts_loading: false };

		case 'create_post_loading':
			return { ...state, create_post_loading: true };
		case 'create_post_success':
			return {
				...state,
				create_post_loading: false,
				posts: [action.payload.post, ...state.posts],
				count: state.count + 1,
				hasMore: state.hasMore,
			};
		case 'create_post_faliure':
			return { ...state, create_post_loading: false };

		case 'delete_post_success':
			return {
				...state,
				posts: state.posts.filter((post) => (post._id !== action.payload.postid ? post : null)),
				count: state.count - 1,
				hasMore: state.hasMore,
			};
		case 'delete_post_faliure':
			return { ...state };
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
		case 'user_followed':
			return {
				...state,
				posts: [],
				first_time_fetched: false,
				count: 0,
				hasMore: true,
				fetch_posts_loading: false,
				create_post_loading: false,
			};
		case 'user_unfollowed':
			return {
				...state,
				posts: [],
				first_time_fetched: false,
				count: 0,
				hasMore: true,
				fetch_posts_loading: false,
				create_post_loading: false,
			};
		default:
			return state;
	}
}
