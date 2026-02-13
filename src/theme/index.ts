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
                        main: "#1C1B1A",
                        contrastText: "#FAF9F7",
                    },
                    secondary: {
                        main: "#8B5E3C",
                    },
                    background: {
                        default: "#F6F4F1",
                        paper: "#FFFFFF",
                    },
                    text: {
                        primary: "#1A1918",
                        secondary: "#6B6762",
                    },
                }
                : {
                    primary: {
                        main: "#E7E5E1",
                        contrastText: "#121110",
                    },
                    secondary: {
                        main: "#C89A6A",
                    },
                    background: {
                        default: "#121110",
                        paper: "#1B1A18",
                    },
                    text: {
                        primary: "#EDEBE7",
                        secondary: "#A7A39D",
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