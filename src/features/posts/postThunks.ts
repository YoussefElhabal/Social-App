import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PostType } from './postTypes';
import { postsService } from '@/services/posts.service';

export const fetchPosts = createAsyncThunk<PostType[], void, { rejectValue: string }>(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const data = await postsService.getPosts();
            return data.posts;
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data ?? err.message);
            }
            return rejectWithValue('Failed to fetch posts');
        }
    }
);
