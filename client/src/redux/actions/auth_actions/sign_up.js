import axios from 'axios';
import M from 'materialize-css';
import history from '../../../history';

const sign_up = (name, username, password) => async (dispatch) => {
	try {
		dispatch({ type: 'sign_up_loading' });
		const res = await axios.post('/signup', { name, username, password });
		M.toast({ html: res.data.msg, classes: '#039be5 light-blue darken-1' });
		dispatch({ type: 'sign_up_success' });
		localStorage.clear();
		localStorage.setItem('x-auth-token', res.data.token);
		dispatch({ type: 'signed_up_successfully', payload: { _id: res.data._id } });
		history.push('/');
	} catch (error) {
		M.toast({ html: error.response.data.msg });
		dispatch({ type: 'sign_up_faliure' });
	}
};

export default sign_up;
