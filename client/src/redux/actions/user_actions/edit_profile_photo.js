import axios from 'axios';

const edit_profile_photo = (image) => async (dispatch) => {
	try {
		dispatch({ type: 'edit_profile_photo_loading' });
		const data = new FormData();
		data.append('file', image);
		const token = localStorage.getItem('x-auth-token');
		const res = await axios.put('/editprofilephoto', data, {
			headers: { 'content-type': 'multipart/form-data', 'x-auth-token': token },
		});
		dispatch({ type: 'edit_profile_photo_success', payload: { user: res.data.user } });
	} catch (error) {
		dispatch({ type: 'edit_profile_photo_faliure' });
	}
};

export default edit_profile_photo;
