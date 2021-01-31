import axios from "axios"

const follow=(followid)=>async (dispatch)=>{
    try {
        const token=localStorage.getItem('x-auth-token')
        const res=await axios.put('/follow',{followid},{headers:{"x-auth-token":token}})
        dispatch({type:"user_followed",payload:{user:res.data.user}})
    } catch (error) {
    }
}
export default follow