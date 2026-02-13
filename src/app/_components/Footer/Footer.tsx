"use client";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.paper",
                color: "text.secondary",
                borderTop: 1,
                borderColor: "divider",
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "center",
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} Social App. All rights reserved.
                </Typography>
            </Toolbar>
        </Box>
    );
}
