"use client";

import { loginMethod } from '@/features/auth/authThunks';
import { useAppDispatch } from '@/store/hooks';
import { Button, Container, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

export default function Login() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const loginFormObj = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit(values, { resetForm }) {
            dispatch(loginMethod(values))
                .unwrap()
                .then((res) => {
                    Cookies.set("token", res.token, {
                        expires: 7,
                        sameSite: "strict",
                    });
                    resetForm();
                    toast.success('Welcome back');
                    router.push('/');
                })
                .catch(() => {
                    toast.error('Incorrect email or password');
                });
        },
    });

    return (
        <Container maxWidth="sm" sx={{ mt: 5, minHeight: "70vh" }}>
            <Paper sx={{ p: 5 }}>
                <form
                    onSubmit={loginFormObj.handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
                >
                    <TextField
                        name="email"
                        label="Email"
                        value={loginFormObj.values.email}
                        onChange={loginFormObj.handleChange}
                    />

                    <TextField
                        name="password"
                        type="password"
                        label="Password"
                        value={loginFormObj.values.password}
                        onChange={loginFormObj.handleChange}
                    />

                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
