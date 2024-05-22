import { createSlice } from "@reduxjs/toolkit";

export const viewedSlice = createSlice({
    name :'Viewed',
    initialState :{
        item:[]

    },
    reducers:{
        addNewproductView :(state, actions) =>{
            const {id} = actions.payload
        state.item = [...new Set([id, ...state.item])]
        }
    },
})

export const {} = viewedSlice.actions
export default viewedSlice.reducer   