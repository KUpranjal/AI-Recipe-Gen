import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",               // Use lowercase for consistency
    initialState: [],            // Array for cached recipes
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);  // Correct mutating state in Redux Toolkit
        }
    }
});

export default cacheSlice.reducer;
export const { addRecipe } = cacheSlice.actions;
