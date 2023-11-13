import { createSlice } from "@reduxjs/toolkit";
import { BiSolidBeenHere } from "react-icons/bi";

const initialState = {
    content: {
        title: "Introduction",
        data: "JavaScript object-based approach for style creation - PLAYGROUND",
        menu: [{ title: "Introduction", path: "#", Icon: BiSolidBeenHere }],
    },
};

const playgroundSlice = createSlice({
    name: "playground",
    initialState,
    reducers: {
        introductionHandler(store) {
            store.content = {
                title: "Introduction",
                data: "JavaScript object-based approach for style creation - PLAYGROUND",
                menu: [
                    { title: "Introduction", path: "#", Icon: BiSolidBeenHere },
                ],
            };
        },
    },
});

export const playgroundActions = playgroundSlice.actions;
export default playgroundSlice.reducer;