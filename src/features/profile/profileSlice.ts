import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "./profileTypes";
import { fetchProfile, fetchUserPosts, uploadProfilePicture } from "./profileThunks";

const initialState: ProfileState = {
    user: null,
    userPosts: [],

    isProfileLoading: false,
    isPostsLoading: false,
    hasFetchedPosts: false,
    isPhotoLoading: false,

    isProfileError: false,
    isPostsError: false,
    isPhotoError: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.isProfileLoading = true;
                state.isProfileError = false;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.isProfileLoading = false;
                state.user = action.payload;
            })
            .addCase(fetchProfile.rejected, (state) => {
                state.isProfileLoading = false;
                state.isProfileError = true;
            })

            .addCase(fetchUserPosts.pending, (state) => {
                state.isPostsLoading = true;
                state.isPostsError = false;
            })
            .addCase(fetchUserPosts.fulfilled, (state, action) => {
                state.isPostsLoading = false;
                state.userPosts = action.payload.sort(
                    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
                state.hasFetchedPosts = true;
            })
            .addCase(fetchUserPosts.rejected, (state) => {
                state.isPostsLoading = false;
                state.isPostsError = true;
            })

            .addCase(uploadProfilePicture.pending, (state) => {
                state.isPhotoLoading = true;
                state.isPhotoError = false;
            })
            .addCase(uploadProfilePicture.fulfilled, (state) => {
                state.isPhotoLoading = false;
            })
            .addCase(uploadProfilePicture.rejected, (state) => {
                state.isPhotoLoading = false;
                state.isPhotoError = true;
            });
    },
});

export default profileSlice.reducer;