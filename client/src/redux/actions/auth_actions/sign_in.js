import axios from 'axios';
import M from 'materialize-css';
import history from '../../../history';

const sign_in = (username, password) => async (dispatch) => {
	try {
		dispatch({ type: 'sign_in_loading' });
		const res = await axios.post('/signin', { username, password });
		M.toast({ html: res.data.msg, classes: '#039be5 light-blue darken-1' });
		dispatch({ type: 'sign_in_success' });
		localStorage.clear();
		localStorage.setItem('x-auth-token', res.data.token);
		dispatch({ type: 'signed_in_successfully', payload: { _id: res.data._id } });
		history.push('/');
	} catch (error) {
		M.toast({ html: error.response.data.msg });
		dispatch({ type: 'sign_in_faliure' });
	}
};

export default sign_in;
