import axios from 'axios';
import store from "../../store"
const fetch_posts = () => async (dispatch) => {
	try {
        dispatch({ type: 'fetch_posts_loading' });
        const {count}=store.getState().postsState
		const token = localStorage.getItem('x-auth-token');
        const res = await axios.get(`/getallposts/?count=${count}`, { headers: { 'x-auth-token': token } });
        dispatch({type:"fetch_posts_success",payload:{posts:res.data.posts}})
        
	} catch (error) {
        dispatch({type:"fetch_posts_faliure"})
    }
};

export default fetch_posts