import { TextField, InputAdornment, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function CommentInput() {
    return (
        <TextField
            fullWidth
            placeholder="Add a comment..."
            size="small"
            sx={{
                bgcolor: "background.default",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                    paddingRight: 0,
                    "& fieldset": {
                        borderColor: "divider",
                    },
                    "&:hover fieldset": {
                        borderColor: "secondary.main",
                    },
                },
            }}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                sx={{
                                    color: "text.secondary",
                                    "&:hover": {
                                        color: "secondary.main",
                                        bgcolor: "transparent",
                                    },
                                }}
                            >
                                <SendIcon fontSize="small" />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
}
