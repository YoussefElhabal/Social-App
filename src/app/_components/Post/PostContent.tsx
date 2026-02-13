import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function PostContent({ body }: { body: string }) {
    return (
        <CardContent sx={{ px: 1 }}>
            <Typography variant="body2">
                {body}
            </Typography>
        </CardContent>
    );
}
