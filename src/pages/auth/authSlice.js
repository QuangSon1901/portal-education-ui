import * as httpRequest from '~/utils/httpRequest';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage } from '~/utils/storage';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: null,
        response: null,
        type: '',
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                const { payload } = action;
                switch (payload.success) {
                    case 'success':
                        state.isAuthenticated = true;
                        state.response = payload;
                        if (payload.type === 's') {
                            state.user = payload.user;
                            state.type = 's';
                        }
                        if (payload.type === 't') {
                            state.user = payload.user;
                            state.type = 't';
                        }
                        if (payload.type === 'a') {
                            state.user = null;
                            state.type = 'a';
                        }
                        break;
                    default:
                        state.isAuthenticated = false;
                        state.response = payload;
                        state.type = '';
                }
            })
            .addCase(getUser.fulfilled, (state, action) => {
                const { payload } = action;
                switch (payload.success) {
                    case 'success':
                        state.isAuthenticated = true;
                        state.user = payload.user;
                        state.response = payload;
                        if (payload.type === 's') {
                            state.user = payload.user;
                            state.type = 's';
                        }
                        if (payload.type === 't') {
                            state.user = payload.user;
                            state.type = 't';
                        }
                        if (payload.type === 'a') {
                            state.user = null;
                            state.type = 'a';
                        }
                        break;
                    default:
                        state.isAuthenticated = false;
                        state.user = null;
                        state.response = payload;
                        state.type = '';
                }
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
                state.response = null;
                state.type = '';
            });
    },
});

export const loginUser = createAsyncThunk('auth/login', async (form) => {
    try {
        const res = await httpRequest.post('/auth/login', form);

        if (res.success === 'success') storage.set(process.env.REACT_APP_TOKEN, res.token);

        return res;
    } catch (error) {
        if (error.response.data) return error.response.data;
        return { status: 403, success: 'error', message: error.message };
    }
});

export const getUser = createAsyncThunk('auth/get-user', async () => {
    if (!storage.get(process.env.REACT_APP_TOKEN)) return { status: 401, success: 'error', message: 'No token!' };
    const token = storage.get(process.env.REACT_APP_TOKEN);

    try {
        const res = await httpRequest.get('/auth/user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res;
    } catch (error) {
        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        if (error.response.data) return error.response.data;
        return { status: 503, success: 'error', message: error.message };
    }
});

export const logoutUser = createAsyncThunk('auth/log-out', async () => {
    if (!storage.get(process.env.REACT_APP_TOKEN)) return { status: 401, success: 'error', message: 'No token!' };
    localStorage.removeItem(process.env.REACT_APP_TOKEN);
});

export default authSlice;
