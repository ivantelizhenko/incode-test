import { configureStore } from '@reduxjs/toolkit';
import listReducer from './ListSlice';

const store = configureStore({
  reducer: { list: listReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
