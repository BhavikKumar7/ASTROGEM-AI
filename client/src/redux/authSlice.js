import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

import {
    registerUser,
    loginUser,
    logoutUser
} from "../services/authService";


// REGISTER

export const register = createAsyncThunk(
    "auth/register",

    async (userData, thunkAPI) => {

        try {

            return await registerUser(
                userData
            );

        } catch (error) {

            return thunkAPI.rejectWithValue(

                error.response?.data?.message ||

                "Registration failed"

            );

        }

    }
);


// LOGIN

export const login = createAsyncThunk(
    "auth/login",

    async (userData, thunkAPI) => {

        try {

            return await loginUser(
                userData
            );

        } catch (error) {

            return thunkAPI.rejectWithValue(

                error.response?.data?.message ||

                "Login failed"

            );

        }

    }
);


// LOGOUT

export const logout = createAsyncThunk(
    "auth/logout",

    async () => {

        await logoutUser();

        return true;

    }
);


const initialState = {

    user:
        JSON.parse(
            localStorage.getItem(
                "user"
            )
        ) || null,

    token:
        localStorage.getItem(
            "token"
        ) || null,

    isAuthenticated:
        !!localStorage.getItem(
            "token"
        ),

    loading: false,

    error: null

};


const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {

        clearError: state => {

            state.error = null;

        }

    },

    extraReducers: builder => {

        builder

            // REGISTER

            .addCase(
                register.pending,

                state => {

                    state.loading = true;

                    state.error = null;

                }
            )

            .addCase(
                register.fulfilled,

                (
                    state,
                    action
                ) => {

                    state.loading = false;

                    state.user =
                        action.payload.user;

                    state.token =
                        action.payload.token;

                    state.isAuthenticated = true;

                    state.error = null;

                    localStorage.setItem(

                        "token",

                        action.payload.token

                    );

                    localStorage.setItem(

                        "user",

                        JSON.stringify(
                            action.payload.user
                        )

                    );

                }
            )

            .addCase(
                register.rejected,

                (
                    state,
                    action
                ) => {

                    state.loading = false;

                    state.error =
                        action.payload;

                }
            )


            // LOGIN

            .addCase(
                login.pending,

                state => {

                    state.loading = true;

                    state.error = null;

                }
            )

            .addCase(
                login.fulfilled,

                (
                    state,
                    action
                ) => {

                    state.loading = false;

                    state.user =
                        action.payload.user;

                    state.token =
                        action.payload.token;

                    state.isAuthenticated = true;

                    state.error = null;

                    localStorage.setItem(

                        "token",

                        action.payload.token

                    );

                    localStorage.setItem(

                        "user",

                        JSON.stringify(
                            action.payload.user
                        )

                    );

                }
            )

            .addCase(
                login.rejected,

                (
                    state,
                    action
                ) => {

                    state.loading = false;

                    state.error =
                        action.payload;

                }
            )


            // LOGOUT

            .addCase(
                logout.pending,

                state => {

                    state.loading = true;

                }
            )

            .addCase(
                logout.fulfilled,

                state => {

                    state.user = null;

                    state.token = null;

                    state.isAuthenticated = false;

                    state.loading = false;

                    state.error = null;

                    localStorage.removeItem(
                        "token"
                    );

                    localStorage.removeItem(
                        "user"
                    );

                }
            )

            .addCase(
                logout.rejected,

                state => {

                    state.loading = false;

                }
            );

    }

});


export const {
    clearError
} = authSlice.actions;

export default authSlice.reducer;