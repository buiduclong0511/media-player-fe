import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { authApi } from "src/Api";

export const login = createAsyncThunk("auth/login", async (body, { rejectWithValue }) => {
    try {
        const res = await authApi.login(body);
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const register = createAsyncThunk("auth/register", async (body, { rejectWithValue }) => {
    try {
        const res = await authApi.register(body);
        return res.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

const initialState = {
    accessToken: null,
    userInfo: null,
    isLoading: false
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.accessToken = null;
            state.userInfo = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            const { data, meta } = action.payload;
            state.userInfo = data;
            state.accessToken = meta.token;
            state.isLoading = false;
        })

        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(login.rejected, (state) => {
            state.accessToken = null;
            state.userInfo = null;
            state.isLoading = false;
        });

        builder.addCase(register.fulfilled, (state, action) => {
            const { data, meta } = action.payload;
            state.userInfo = data;
            state.accessToken = meta.token;
            state.isLoading = false;
        })

        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(register.rejected, (state) => {
            state.accessToken = null;
            state.userInfo = null;
            state.isLoading = false;
        });
    }
});

export const { logout } = auth.actions;

export default auth.reducer;