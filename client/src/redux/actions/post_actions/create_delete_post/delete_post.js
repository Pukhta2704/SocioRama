import axios from 'axios';
import M from 'materialize-css';

const delete_post = (postid) => async (dispatch) => {
	try {
		const token = localStorage.getItem('x-auth-token');
		const res = await axios.delete(`/deletepost/${postid}`, { headers: { 'x-auth-token': token } });
		M.toast({ html: res.data.msg, classes: '#039be5 light-blue darken-1' });
		dispatch({ type: 'delete_post_success', payload: { postid } });
	} catch (error) {
		dispatch({ type: 'delete_post_faliure' });
	}
};

export default delete_post;
