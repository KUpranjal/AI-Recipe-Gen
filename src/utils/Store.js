import { configureStore } from "@reduxjs/toolkit";
import recipeSliceReducer from "./RecipeSlice";
import cacheSliceReducer from "./CacheSlice";

const store = configureStore({
    reducer: {
        recipe: recipeSliceReducer,
        cache: cacheSliceReducer
    }
});

export default store;
