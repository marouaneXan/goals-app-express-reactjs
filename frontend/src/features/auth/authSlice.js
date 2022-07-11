import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

//Get user From localStorage
const user=JSON.parse(localStorage.getItem('user'))
const initialState={
    user:user ? user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

//Register user

export const register =createAsyncThunk('auth/register',async (user,thunkAPI)=>{
    try{
        return await authService.register(user)
    }catch(err){

    }
})

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=false
        }
    },
    extraReducers:()=>{

    }
})

export const {reset} =authSlice.actions
export default authSlice.reducer