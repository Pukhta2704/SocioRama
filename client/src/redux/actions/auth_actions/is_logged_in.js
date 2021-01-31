import axios from 'axios';
import history from '../../../history';

const is_logged_in = () => async (dispatch) => {
	try {
		dispatch({ type: 'is_logged_in_loading' });
		const token = localStorage.getItem('x-auth-token');
		if (!token) {
			dispatch({ type: 'is_logged_in_faliure' });
			history.push('/signin');
			return;
		}
		const res = await axios.get('/istokenvalid', { headers: { 'x-auth-token': token } });
		if (res.data._id) {
			dispatch({ type: 'is_logged_in_success', payload: { _id: res.data._id } });
		} else {
			localStorage.clear();
			history.push('/signin');
			dispatch({ type: 'is_logged_in_faliure' });
		}
	} catch (error) {
		localStorage.clear();
		history.push('/signin');
		dispatch({ type: 'is_logged_in_faliure' });
	}
};
export default is_logged_in;
