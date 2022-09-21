import { createSlice, Slice } from '@reduxjs/toolkit';


export interface UserInformation {
    username: string;
    email: string;
    token: string;
}
 
const emptyUserState:UserInformation = {
    username: '',
    email: '',
    token: ''
} 

export const userSlice:Slice = createSlice({
    name:'user',
    initialState: emptyUserState,
    reducers:{
        UserLogInWithGoogle: (state, action) => {
            return action.payload
        },

        userLogout: (state) => {
            state.user = emptyUserState;
        },

        registerUserWithEmailAndPassword: (state, action) => {
            return action.payload
        },
        
        userSignInWithEmailAndPassword: (state, action) => {
            return action.payload
        },

        setUserData: (state, action) => {
            return action.payload
        }
    }
});

export const { 
    UserLogInWithGoogle,
    registerUserWithEmailAndPassword,
    userLogout,
    userSignInWithEmailAndPassword,
    setUserData
} = userSlice.actions;

export default userSlice.reducer;
