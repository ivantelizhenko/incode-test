import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const addListItem = createAsyncThunk(
  'addListItem/list',
  async function () {}
);

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    sayHi() {
      console.log('hi');
    },
  },
  extraReducers: builder =>
    builder
      .addCase(addListItem.pending, state => {})
      .addCase(addListItem.fulfilled, state => {})
      .addCase(addListItem.rejected, state => {}),
});

export const { sayHi } = listSlice.actions;

export default listSlice.reducer;
