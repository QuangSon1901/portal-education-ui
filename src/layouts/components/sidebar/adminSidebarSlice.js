const { createSlice } = require('@reduxjs/toolkit');

const adminSidebarSlice = createSlice({
    name: 'adminSidebarSlice',
    initialState: {
        toggle: true,
    },
    reducers: {
        toggle(state) {
            state.toggle = !state.toggle;
        },
    },
});

export default adminSidebarSlice;
