import { Box, Typography } from "@mui/material";

export default function page() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", my: 2 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "700", color: "text.secondary" }}>User Profile</Typography>
        </Box>
    )
}
