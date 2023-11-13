import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import documentationReducer from "./slices/documentationSlice";
import playgroundReducer from "./slices/playgroundSlice";
import joinUsReducer from "./slices/joinUsSlice";

const store = configureStore({
    reducer: {
        home: homeReducer,
        docs: documentationReducer,
        player: playgroundReducer,
        join: joinUsReducer,
    },
});

export default store;