import axios from "axios"

const like_post=(postid)=>async(dispatch)=>{
    try {
        const token=localStorage.getItem('x-auth-token')
        const res=await axios.put('/like',{postid},{headers:{"x-auth-token":token}})
        dispatch({type:"post_liked",payload:{post:res.data.post}})
    } catch (error) {
    }
}
export default like_post