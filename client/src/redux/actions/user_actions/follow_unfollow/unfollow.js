import axios from "axios"

const Unfollow=(unfollowid)=>async (dispatch)=>{
    try {
        const token=localStorage.getItem('x-auth-token')
        const res=await axios.put('/Unfollow',{unfollowid},{headers:{"x-auth-token":token}})
        dispatch({type:"user_unfollowed",payload:{user:res.data.user}})
    } catch (error) {
    }
}
export default Unfollow