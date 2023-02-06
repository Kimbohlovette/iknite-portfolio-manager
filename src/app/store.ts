import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import data from '../shared/data.json'
import { Data } from '../shared/types';

let initialDataState: Data = data;

const dataSlice = createSlice({
    name: "data",
    initialState: initialDataState,
    reducers: {}
});

const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false},
    reducers: {
        login: (state)=> {
            state.isAuthenticated = true;
            console.log(state.isAuthenticated);
        },
        logout: (state) =>{
            state.isAuthenticated = false;
        }
    }
});

export const store = configureStore({
  reducer: { 
    data: dataSlice.reducer, 
    auth: authSlice.reducer},
});

export const dataActions = dataSlice.actions;
export const authActions = authSlice.actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
