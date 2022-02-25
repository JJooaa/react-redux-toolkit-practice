import { createSlice } from "@reduxjs/toolkit";

// Will be the decider of what page will be rendered
// Pages contain: counter-page, placeholder-page etc

const pageSlice = createSlice({
    name: "page",
    initialState: {
        value: "counter-page",
    },
    reducers: {
        changePage: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changePage } = pageSlice.actions;

export default pageSlice.reducer;
