import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from './postTypes';
import { fetchPosts } from './postThunks';

const initialState: PostsState = {
    posts: [],
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
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export default postsSlice.reducer;
