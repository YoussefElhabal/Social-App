import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const postsService = {
    getPosts: async (limit: number = 10) => {
        const token = Cookies.get('token');
        if (!token) throw new Error('No auth token found');

        const res = await axios.get(`${API_BASE_URL}/posts?limit=${limit}`, {
            headers: {
                token
            },
        });
        return res.data;
    },

    getPost: async (id: string) => {
        const token = Cookies.get('token');
        if (!token) throw new Error('No auth token found');

        const res = await axios.get(`${API_BASE_URL}/posts/${id}`, {
            headers: {
                token
            },
        });
        return res.data;
    },

    createPost: async (body: string, image?: File) => {
        const token = Cookies.get("token");
        if (!token) throw new Error("No auth token found");

        const payload = new FormData();
        payload.append("body", body);
        if (image) payload.append("image", image);

        const res = await axios.post(`${API_BASE_URL}/posts`, payload, {
            headers: {
                token
            },
        });
        return res.data;
    },
};
