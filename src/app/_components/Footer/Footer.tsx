"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
    const theme = useTheme();

    return (
        <Box>
            <AppBar position="static" sx={{
                top: "auto",
                bottom: 0,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
            }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="body1" component="div">
                        © {new Date().getFullYear()} Social App. All rights reserved.
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
