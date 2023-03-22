import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses : []
};

export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    updateCourse: (state, action) => {
      state.courses = action.payload;
    }
  },
});

export const {
    updateCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
