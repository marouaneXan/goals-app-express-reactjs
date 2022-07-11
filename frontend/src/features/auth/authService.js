import axios from "axios";

const API_URL='/api/users/'

//Register user
const register=async (userData)=>{
    const res=await axios.post(`API_URL/${register}`,userData)
    if(res.data){
        //Set the user data in the localStorage
        localStorage.setItem('user',JSON.stringify(res.data))
    }
    return res.data;
}

const authService={
    register
}

export default authService