import { createSlice } from "@reduxjs/toolkit";

const CacheSlice = createSlice({
    name: "cache",               // Use lowercase for consistency
    initialState: [],            // Array for cached recipes
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);  // Correct mutating state in Redux Toolkit
        }
    }
});

export default CacheSlice.reducer;
export const { addRecipe } = CacheSlice.actions;
