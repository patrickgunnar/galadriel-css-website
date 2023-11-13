import { createSlice } from "@reduxjs/toolkit";
import { BiSolidBeenHere } from "react-icons/bi";

const initialState = {
    content: {
        title: "Introduction",
        data: "JavaScript object-based approach for style creation - DOCUMENTATION",
        menu: [{ title: "Introduction", path: "#", Icon: BiSolidBeenHere }],
    },
};

const documentationSlice = createSlice({
    name: "documentation",
    initialState,
    reducers: {
        introductionHandler(store) {
            store.content = {
                title: "Introduction",
                data: "JavaScript object-based approach for style creation - DOCUMENTATION",
                menu: [
                    { title: "Introduction", path: "#", Icon: BiSolidBeenHere },
                ],
            };
        },
    },
});

export const documentationActions = documentationSlice.actions;
export default documentationSlice.reducer;