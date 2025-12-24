"use client";

import { Box, Button, Container, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { authService } from "@/services/auth.service";
import { SignupPayload } from "@/features/auth/authTypes";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
    const router = useRouter();

    const formik = useFormik<SignupPayload>({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            dateOfBirth: "",
            gender: "male",
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await authService.signup(values);
                if (res.message === "success") {
                    toast.success("Account created successfully");
                    resetForm();
                    router.push("/login");
                }
            } catch {
                toast.error("Signup failed");
            }
        },
    });

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 5
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
                    sx={{ mb: 1, fontWeight: 600 }}
                >
                    Create Account
                </Typography>

                <Typography
                    variant="body2"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Join Social App in just a few steps
                </Typography>

                <form
                    onSubmit={formik.handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 18,
                    }}
                >
                    <TextField
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        fullWidth
                    />

                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        fullWidth
                    />

                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        fullWidth
                    />

                    <TextField
                        name="rePassword"
                        label="Confirm Password"
                        type="password"
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                        fullWidth
                    />

                    <TextField
                        name="dateOfBirth"
                        type="date"
                        label="Date of Birth"
                        value={formik.values.dateOfBirth}
                        onChange={formik.handleChange}
                        fullWidth
                        slotProps={{
                            inputLabel: {
                                shrink: true
                            },
                        }}
                    />

                    <TextField
                        name="gender"
                        select
                        label="Gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        fullWidth
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </TextField>

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
                        Sign Up
                    </Button>
                </form>

                <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                        Already have an account?{" "}
                        <Box
                            component={Link}
                            href="/login"
                            sx={{
                                color: "primary.main",
                                fontWeight: 500,
                                textDecoration: "none",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            Log in
                        </Box>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}
