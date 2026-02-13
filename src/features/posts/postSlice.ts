import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from './postTypes';
import { createPost, fetchPost, fetchPosts } from './postThunks';

const initialState: PostsState = {
    allPosts: [],
    singlePost: null,

    isFetchingPosts: false,
    isFetchingSinglePost: false,
    isCreatingPost: false,

    fetchPostsError: false,
    fetchPostError: false,
    createPostError: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isFetchingPosts = true;
                state.fetchPostsError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isFetchingPosts = false;
                state.allPosts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isFetchingPosts = false;
                state.fetchPostsError = true;
            })

            .addCase(fetchPost.pending, (state) => {
                state.isFetchingSinglePost = true;
                state.fetchPostError = false;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isFetchingSinglePost = false;
                state.singlePost = action.payload;
            })
            .addCase(fetchPost.rejected, (state) => {
                state.isFetchingSinglePost = false;
                state.fetchPostError = true;
            })

            .addCase(createPost.pending, (state) => {
                state.isCreatingPost = true;
                state.createPostError = false;
            })
            .addCase(createPost.fulfilled, (state) => {
                state.isCreatingPost = false;
            })
            .addCase(createPost.rejected, (state) => {
                state.isCreatingPost = false;
                state.createPostError = true;
            });
    }
});

export default postsSlice.reducer;
