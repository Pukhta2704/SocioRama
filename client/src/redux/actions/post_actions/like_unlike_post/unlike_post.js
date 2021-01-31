import axios from "axios"

const unlike_post=(postid)=>async(dispatch)=>{
    try {
        const token=localStorage.getItem('x-auth-token')
        const res=await axios.put('/unlike',{postid},{headers:{"x-auth-token":token}})
        dispatch({type:"post_unliked",payload:{post:res.data.post}})
    } catch (error) {
    }
}
export default unlike_post