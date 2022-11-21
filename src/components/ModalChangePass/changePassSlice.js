const { createSlice } = require('@reduxjs/toolkit');

const changePassSlice = createSlice({
    name: 'changePassSlice',
    initialState: {
        toggle: false,
    },
    reducers: {
        toggle(state) {
            state.toggle = !state.toggle;
        },
    },
});

export default changePassSlice;
