"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
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
