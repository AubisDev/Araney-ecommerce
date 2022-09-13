import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/user';
import { getLocalStorage } from '../../utilities/localstorage';

export const EmptyUserState: UserInfo = {
    id: 0,
    name: '',
    email: '',
}

export const useSlice = createSlice({
    name:'user',
    initialState: getLocalStorage( 'user', EmptyUserState ),
    reducers:{

    }
});

export const { } = useSlice.actions;

export default useSlice.reducer;
