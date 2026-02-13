"use client";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    TextField,
    Stack,
} from "@mui/material";
import { useRef, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useAppDispatch } from "@/store/hooks";
import { createPost } from "@/features/posts/postThunks";
import toast from "react-hot-toast";

export default function PostCreation() {
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const [body, setBody] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setBody("");
        setImage(null);
    };

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setImage(file);
    };

    const handlePost = async () => {
        if (!body.trim()) return;

        try {
            await dispatch(createPost({ body, image: image || undefined })).unwrap();
            toast.success("Post created successfully", { duration: 3000 });
            handleClose();
        } catch {
            toast.error("Failed to create post", { duration: 3000 });
        }
    };


    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                borderRadius: 2,
            }}>
            <TextField
                placeholder="What's on your mind?"
                multiline
                minRows={2}
                fullWidth
                onClick={handleOpen}
                slotProps={{
                    input: {
                        readOnly: true,
                    },
                }}
                sx={{
                    "& .MuiInputBase-input": {
                        color: "text.primary",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                }}
            />

            <Divider sx={{ my: 0.5 }} />

            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {[ImageIcon, VideoCallIcon, EmojiEmotionsIcon].map((Icon, i) => (
                    <IconButton
                        key={i}
                        onClick={handleOpen}
                        sx={{
                            color: "text.secondary",
                            "&:hover": {
                                color: "secondary.main",
                                bgcolor: "transparent",
                            },
                        }}
                    >
                        <Icon />
                    </IconButton>
                ))}
            </Box>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle sx={{ fontWeight: 600 }}>
                    Create post
                </DialogTitle>

                <DialogContent>
                    <Stack spacing={2}>
                        <TextField
                            placeholder="What's on your mind?"
                            multiline
                            minRows={4}
                            fullWidth
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "divider",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "secondary.main",
                                },
                            }}
                        />

                        {image && (
                            <Box
                                component="img"
                                src={URL.createObjectURL(image)}
                                alt="preview"
                                sx={{
                                    width: "100%",
                                    maxHeight: 300,
                                    objectFit: "cover",
                                    borderRadius: 2,
                                }}
                            />
                        )}
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleImageSelect}
                    />

                    <IconButton
                        onClick={() => fileInputRef.current?.click()}
                        sx={{
                            color: "text.secondary",
                            "&:hover": {
                                color: "secondary.main",
                                bgcolor: "transparent",
                            },
                        }}
                    >
                        <ImageIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    <Button
                        onClick={handleClose}
                        sx={{
                            color: "text.secondary",
                            "&:hover": {
                                bgcolor: "transparent",
                                color: "text.primary",
                            },
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handlePost}
                        disabled={!body.trim()}
                        sx={{
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            borderRadius: 2,
                        }}
                    >
                        Post
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
