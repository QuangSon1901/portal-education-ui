import changePassSlice from '~/components/ModalChangePass/changePassSlice';
import adminSidebarSlice from '~/layouts/components/sidebar/adminSidebarSlice';
import authSlice from '~/pages/auth/authSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        changePassSlice: changePassSlice.reducer,
        adminSidebarSlice: adminSidebarSlice.reducer,
    },
});

export default store;
