import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from './postTypes';
import { fetchPost, fetchPosts } from './postThunks';

const initialState: PostsState = {
    allPosts: [],
    singlePost: null,
    isLoading: false,
    isError: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allPosts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchPost.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.singlePost = action.payload;
            })
            .addCase(fetchPost.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default postsSlice.reducer;
