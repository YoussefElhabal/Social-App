"use client";

import { Roboto } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

const baseTheme: ThemeOptions = {
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        body1: {
            fontSize: "0.95rem",
            lineHeight: 1.6,
        },
        body2: {
            fontSize: "0.85rem",
            lineHeight: 1.5,
        },
        button: {
            textTransform: "none",
            fontWeight: 500,
        },
    },
};

export const getTheme = (mode: "light" | "dark") =>
    createTheme({
        ...baseTheme,
        palette: {
            mode,
            ...(mode === "light"
                ?
                {
                    primary: {
                        main: "#1877F2",
                        contrastText: "#ffffff",
                    },
                    secondary: {
                        main: "#42b72a",
                    },
                    background: {
                        default: "#f0f2f5",
                        paper: "#ffffff",
                    },
                    text: {
                        primary: "#050505",
                        secondary: "#65676b",
                    },
                }
                :
                {
                    primary: {
                        main: "#1877F2",
                        contrastText: "#ffffff",
                    },
                    secondary: {
                        main: "#42b72a",
                    },
                    background: {
                        default: "#18191a",
                        paper: "#242526",
                    },
                    text: {
                        primary: "#e4e6eb",
                        secondary: "#b0b3b8",
                    },
                }),
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderRadius: 8,
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.divider,
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.primary.main,
                            borderWidth: 2,
                        },
                    }),
                },
            },
        },
    });