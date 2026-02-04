import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './pages/redux/user/reducers';

export const store = configureStore({
    reducer:{
        userDetails: userReducer
    }
});