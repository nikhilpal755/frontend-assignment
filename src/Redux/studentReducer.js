import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
        name: null,
        age: null,
        timeSlot:null
};

const studentSlice = createSlice({
    name:"student",
    initialState,
    reducers:{
        setStudentName: (state, action) => {
            state.name = action.payload;
        },
        setStudentAge: (state, action) => {
            state.age = action.payload;
        },
        setStudentTimeSlot: (state, action) => {
            state.timeSlot = action.payload;
        }
    }
})
// console.log(studentSlice)

export const {setStudentName, setStudentAge, setStudentTimeSlot} = studentSlice.actions
export default studentSlice.reducer