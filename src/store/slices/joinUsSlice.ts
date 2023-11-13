import { createSlice } from "@reduxjs/toolkit";
import { BiSolidBeenHere } from "react-icons/bi";

const initialState = {
    content: {
        title: "Introduction",
        data: "JavaScript object-based approach for style creation - JOIN US",
        menu: [{ title: "Introduction", path: "#", Icon: BiSolidBeenHere }],
    },
};

const joinUsSlice = createSlice({
    name: "joinUs",
    initialState,
    reducers: {
        introductionHandler(store) {
            store.content = {
                title: "Introduction",
                data: "JavaScript object-based approach for style creation - JOIN US",
                menu: [
                    { title: "Introduction", path: "#", Icon: BiSolidBeenHere },
                ],
            };
        },
    },
});

export const joinUsActions = joinUsSlice.actions;
export default joinUsSlice.reducer;