import { createSlice, Slice } from '@reduxjs/toolkit';

const userInitialValue = {
    user: null
}

export const userSlice:Slice = createSlice({
    name:'user',
    initialState: userInitialValue,
    reducers:{
        UserLogInWithGoogle: (state, action) => {
            state.user = action.payload
        },

        userLogout: ( state ) => {
            state.user = null;
        },

        registerUserWithEmailAndPassword: (state, action) => {
            // const { email, password } = action.payload;
            // state.user = 
        }
    }
});

export const { 
    UserLogInWithGoogle,
    registerUserWithEmailAndPassword,
    userLogout
} = userSlice.actions;

export default userSlice.reducer;
