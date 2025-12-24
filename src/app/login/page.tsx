"use client";

import { loginMethod } from '@/features/auth/authThunks';
import { useAppDispatch } from '@/store/hooks';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import Link from 'next/link';

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
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 5,
                minHeight: "80vh"
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: "100%",
                    p: { xs: 3.5, sm: 5 },
                    borderRadius: 3,
                    backgroundColor: "background.paper",
                    boxShadow: (theme) =>
                        theme.palette.mode === "light"
                            ? "0 2px 12px rgba(0,0,0,0.08)"
                            : "0 2px 12px rgba(0,0,0,0.5)",
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        mb: 1,
                        fontWeight: 600,
                    }}
                >
                    Welcome Back
                </Typography>

                <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Log in to continue to Social App
                </Typography>

                <form
                    onSubmit={loginFormObj.handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 18,
                    }}
                >
                    <TextField
                        name="email"
                        label="Email"
                        value={loginFormObj.values.email}
                        onChange={loginFormObj.handleChange}
                        fullWidth
                    />

                    <TextField
                        name="password"
                        type="password"
                        label="Password"
                        value={loginFormObj.values.password}
                        onChange={loginFormObj.handleChange}
                        fullWidth
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 1,
                            py: 1.4,
                            fontSize: "1rem",
                            fontWeight: 600,
                            borderRadius: 2,
                        }}
                    >
                        Login
                    </Button>
                </form>

                <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                        Don’t have an account?{" "}
                        <Box
                            component={Link}
                            href="/signup"
                            sx={{
                                color: "primary.main",
                                fontWeight: 500,
                                textDecoration: "none",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            Sign up
                        </Box>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}
