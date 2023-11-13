import { createSlice } from "@reduxjs/toolkit";
import { BiSolidBeenHere } from "react-icons/bi";

const initialState = {
    content: {
        title: "Introduction",
        data: "JavaScript object-based approach for style creation - HOME",
        menu: [{ title: "Introduction", path: "#", Icon: BiSolidBeenHere }],
    },
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        introductionHandler(store) {
            store.content = {
                title: "Introduction",
                data: "JavaScript object-based approach for style creation - HOME",
                menu: [
                    { title: "Introduction", path: "#", Icon: BiSolidBeenHere },
                ],
            };
        },
    },
});

export type HomeType = typeof initialState;
export const homeActions = homeSlice.actions;
export default homeSlice.reducer;