import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from '../src/pages/redux/user/reducers';

export const store = configureStore({
    reducer:{
        userDetails: userReducer
    }
});