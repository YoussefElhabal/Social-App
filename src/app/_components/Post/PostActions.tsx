import { CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

export default function PostActions() {
    const icons = [FavoriteIcon, CommentIcon, ShareIcon];

    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            {icons.map((Icon, i) => (
                <IconButton
                    key={i}
                    sx={{
                        color: "text.secondary",
                        "&:hover": {
                            color: "secondary.main",
                            bgcolor: "transparent",
                        }
                    }}>
                    <Icon />
                </IconButton>
            ))}
        </CardActions>
    );
}
