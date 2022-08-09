import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost:any = createAsyncThunk('getPost/patient_id', 
async(patient_id:number)=>{
    // console.log(${patient_id});
    return fetch(`http://127.0.0.1:5000/patient/${patient_id}`)
    .then(res=>res.json())
})


 const patientSlice = createSlice({
    name:"post",
    initialState:{
        loading:false,
        post:[],
        error:null
    },
     reducers:{
        [getPost.pending]:(state:any,action:any)=>{
            state.loading= true
        },
        [getPost.fulfilled]:(state:any,action:any)=>{
            state.loading = false;
            state.post = {action:action.payload};
        },
        [getPost.rejected]:(state:any,action:any)=>{
            state.loading = false;
            state.error= action.payload
        }

    }
 })



 export default patientSlice.reducer;
//  export const selectPost = (state:any)=>state.post.post;