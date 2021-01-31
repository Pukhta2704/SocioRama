import axios from 'axios';

const fetch_profile = (id) => async (dispatch) => {
	try {
		dispatch({ type: 'fetch_profile_loading' });
		const token = localStorage.getItem('x-auth-token');
		const res = await axios.get(`/profile/${id}`, { headers: { 'x-auth-token': token } });
		dispatch({
			type: 'fetch_profile_success',
			payload: { user: res.data.user, posts: res.data.posts },
		});
	} catch (error) {
		dispatch({ type: 'fetch_profile_faliure' });
	}
};

export default fetch_profile;
