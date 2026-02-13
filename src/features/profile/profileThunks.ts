import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileService } from "@/services/profile.service";
import axios from "axios";
import { PostType } from "../posts/postTypes";


export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async (_, { rejectWithValue }) => {
        try {
            const data = await profileService.getProfile();
            return data.user;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data.error);
            }
            return rejectWithValue('Failed to fetch profile');
        }
    }
);

export const fetchUserPosts = createAsyncThunk<PostType[], string, { rejectValue: string }>(
    "profile/fetchUserPosts",
    async (id, { rejectWithValue }) => {
        try {
            const data = await profileService.getUserPosts(id);
            return data.posts;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data.error);
            }
            return rejectWithValue('Failed to fetch profile posts');
        }
    }
);

export const uploadProfilePicture = createAsyncThunk(
    "profile/uploadProfilePicture",
    async ({ photo }: { photo: File }, { rejectWithValue }) => {
        try {
            const data = await profileService.uploadProfilePhoto(photo);
            return data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data.error);
            }
            return rejectWithValue('Failed to upload profile picture');
        }
    }
)