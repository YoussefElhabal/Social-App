import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const postsService = {
    getPosts: async (limit: number = 50) => {
        const token = Cookies.get('token');
        if (!token) throw new Error('No auth token found');

        const res = await axios.get(`${API_BASE_URL}/posts?limit=${limit}`, {
            headers: {
                token
            },
        });
        return res.data;
    },
};