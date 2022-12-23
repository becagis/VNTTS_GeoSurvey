import { createSlice } from '@reduxjs/toolkit'
import { IUserProps } from './index'

const initialState: IUserProps = {
  role: [], // guest
  data: {

  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(setUser.fulfilled, (state, action) => action.payload)
    //   .addCase(updateUserSettings.fulfilled, (state, action) => action.payload)
    //   .addCase(updateUserShortcuts.fulfilled, (state, action) => action.payload);
  }
});

export default userSlice.reducer;
