import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const profileService = {
    getProfile: async () => {
        const token = Cookies.get('token');
        if (!token) throw new Error('No auth token found');

        const res = await axios.get(`${API_BASE_URL}/users/profile-data`, {
            headers: {
                token
            }
        });
        return res.data;
    },

    getUserPosts: async (id: string) => {
        const token = Cookies.get('token');
        if (!token) throw new Error('No auth token found');

        const res = await axios.get(`${API_BASE_URL}/users/${id}/posts`, {
            headers: {
                token
            }
        });
        return res.data;
    },

    uploadProfilePhoto: async (file: File) => {
        const token = Cookies.get('token');
        if (!token) throw new Error('No auth token found');

        const payload = new FormData();
        payload.append("photo", file);

        const res = await axios.put(`${API_BASE_URL}/users/upload-photo`, payload, {
            headers: {
                token
            }
        });
        return res.data;
    }
}