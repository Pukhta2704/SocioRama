import axios from 'axios';

const search_users = (query, searchby) => async (dispatch) => {
	try {
        dispatch({type:"search_user_loading"})

		const token = localStorage.getItem('x-auth-token');
		const res = await axios.get(`/searchusers/?query=${query}&searchby=${searchby}`, {
			headers: { 'x-auth-token': token },
        });
        dispatch({type:"search_user_success",payload:{users:res.data.users}})
	} catch (error) {
        dispatch({type:"search_user_faliure"})

    }
};

export default search_users