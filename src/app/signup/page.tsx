"use client";

import { Button, Container, MenuItem, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import { authService } from "@/services/auth.service";
import { SignupPayload } from "@/features/auth/authTypes";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

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
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Paper sx={{ p: 5 }}>
                <form
                    onSubmit={formik.handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                    <TextField
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />

                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    <TextField
                        name="rePassword"
                        label="Confirm Password"
                        type="password"
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                    />

                    <TextField
                        name="dateOfBirth"
                        type="date"
                        label="Date of Birth"
                        value={formik.values.dateOfBirth}
                        onChange={formik.handleChange}
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                    />

                    <TextField
                        name="gender"
                        select
                        label="Gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </TextField>

                    <Button type="submit" variant="contained">
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
