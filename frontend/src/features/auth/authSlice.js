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