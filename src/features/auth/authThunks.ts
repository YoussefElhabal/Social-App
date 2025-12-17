import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authService } from '@/services/auth.service';
import { LoginPayload, ApiError } from './authTypes';

export const loginMethod = createAsyncThunk<{ token: string; }, LoginPayload, { rejectValue: ApiError }>(
    'auth/login',
    async (payload, { rejectWithValue }) => {
        try {
            const data = await authService.login(payload);
            return data;
        } catch (err) {
            if (axios.isAxiosError(err)) {
                return rejectWithValue({ message: err.response?.data.error });
            }
            return rejectWithValue({ message: 'Login failed' });
        }
    }
);
