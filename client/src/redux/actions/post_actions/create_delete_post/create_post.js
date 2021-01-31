import axios from 'axios';
import M from 'materialize-css';
import history from '../../../../history';
const create_post = (caption, image) => async (dispatch) => {
	dispatch({ type: 'create_post_loading' });
	const token = localStorage.getItem('x-auth-token');
	const file = new FileReader();
	file.readAsDataURL(image);
file.onloadend=()=>{
	console.log(file.result)
}
	try {

		const data = new FormData();
		data.append('file', image);
		data.append('caption', caption);
		const res = await axios.post('/createpost', data, {
			headers: { 'content-type': 'multipart/form-data', 'x-auth-token': token },
		});
		M.toast({ html: res.data.msg, classes: '#039be5 light-blue darken-1' });
		dispatch({ type: 'create_post_success', payload: { post: res.data.post } });
		history.push('/');
	} catch (error) {
		M.toast({ html: error.response.data.msg });
		dispatch({ type: 'create_post_faliure' });
	}
};

export default create_post;
