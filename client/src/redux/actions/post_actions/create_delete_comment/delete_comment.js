import axios from 'axios';

const delete_comment = (commentid) => async (dispatch) => {
	try {
		const token = localStorage.getItem('x-auth-token');
        const res = await axios.put('/deletecomment', { commentid }, { headers: { 'x-auth-token': token } });
        dispatch({type:"comment_deleted",payload:{post:res.data.post}})
	} catch (error) {}
};

export default delete_comment
