import axios from 'axios';
import { LoginPayload, SignupPayload } from '@/features/auth/authTypes';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const authService = {
    login: async (data: LoginPayload) => {
        const res = await axios.post(`${API_BASE_URL}/users/signin`, data);
        return res.data;
    },

    signup: async (data: SignupPayload) => {
        const res = await axios.post(`${API_BASE_URL}/users/signup`, data);
        return res.data;
    },
};