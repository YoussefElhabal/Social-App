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

export const fetchPost = createAsyncThunk<PostType, string, { rejectValue: string }>(
    'posts/fetchPost',
    async (id, { rejectWithValue }) => {
        try {
            const data = await postsService.getPost(id);
            return data.post;
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue(err.response?.data ?? err.message);
            }
            return rejectWithValue('Failed to fetch posts');
        }
    }
);
