import { createSlice } from "@reduxjs/toolkit";
import { homeData } from "@/data/homeData";

const initialState = {
    content: {
        menu: homeData.menu,
        content: homeData.intro
    },
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        introductionHandler(store) {
            store.content = {
                menu: homeData.menu,
                content: homeData.intro,
            };
        },
    },
});

export type HomeType = typeof initialState;
export const homeActions = homeSlice.actions;
export default homeSlice.reducer;
