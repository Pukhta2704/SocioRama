import { combineReducers } from 'redux';
import sign_up_reducer from './auth_reducers/sign_up_reducer';
import is_logged_in_reducer from './auth_reducers/is_logged_in_reducer';
import sign_in_reducer from './auth_reducers/sign_in_reducer';
import posts_reducer from './post_reducer/posts_reducer';
import profile_reducer from './profile_reducer/profile_reducer';
import search_user_reducer from './profile_reducer/search_user_reducer';

export default combineReducers({
	signUpState: sign_up_reducer,
	signInState: sign_in_reducer,
	idState: is_logged_in_reducer,
	postsState: posts_reducer,
	profileState: profile_reducer,
	searchUserState: search_user_reducer,
});
