import axios from 'axios';

const create_comment = (text,postid) => async (dispatch) => {
	try {
		const token = localStorage.getItem('x-auth-token');
        const res = await axios.put('/addcomment', { text,postid }, { headers: { 'x-auth-token': token } });
        dispatch({type:"comment_added",payload:{post:res.data.post}})
	} catch (error) {}
};

export default create_comment
