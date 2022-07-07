import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    file: null,
    error: false,
    loading: false
}

const fileSlice = createSlice({
  name: 'fileslicer',
  initialState,
  reducers: {
    uploadStart: (state) => {
        state.loading = true;
    },
    uploadSuccess: (state, action) => {
        state.file = action.payload;
        state.loading = false;
        state.error = false;
    },
    uploadFailure: (state) => {
        state.loading = false;
        state.error = true;
    },
    getUploadFile: (state, action) => {
        state.file = action.payload
    }
  }
});

export const { uploadStart, uploadSuccess, uploadFailure, getUploadFile } = fileSlice.actions

export default fileSlice.reducer