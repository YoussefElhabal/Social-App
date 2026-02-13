import { Box, Typography } from "@mui/material";

interface Props {
    label: string;
    value: string;
}

export default function ProfileRow({ label, value }: Props) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" color="text.secondary">
                {label}
            </Typography>
            <Typography
                variant="body2"
                fontWeight={500}
                color="text.primary"
            >
                {value}
            </Typography>
        </Box>
    );
}
