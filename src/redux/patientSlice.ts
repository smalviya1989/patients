import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {InitialState,DataPayload} from '../types'


export const getPost:any = createAsyncThunk('getPost/patient_id', 

async(patient_id:number)=>{
    // console.log(${patient_id});
    return fetch(`http://127.0.0.1:5000/patient/${patient_id}`)
    .then(res=>res.json())
})

const initialState:InitialState={
    patients:[],
    error:null,
    loading:false

}

// export const addpatient = createAsyncThunk('getPost/createPost', 

// async(data)=>{
    
//     return fetch(`http://127.0.0.1:5000/patient`, {
//         method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data=
//             )

//     })
//     .then(res=>res.json())
// })


 export const patientSlice = createSlice({
    name:"patient",
    initialState,
    reducers:{},
     extraReducers:{
        [getPost.pending]:(state:InitialState,action:DataPayload)=>{
            state.loading= true
        },
        [getPost.fulfilled]:(state:InitialState,action:DataPayload)=>{
            state.loading = false;
            state.patients.push(action.payload)
        },
        [getPost.rejected]:(state:InitialState,action:DataPayload)=>{
            state.loading = false;
            state.error= action.payload
        }

    }
 })



 export const patientsActions=patientSlice.actions;
//  export const selectPost = (state:any)=>state.post.post;