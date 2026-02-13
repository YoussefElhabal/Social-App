"use client";

import { useRef, useState, ChangeEvent } from "react";
import { Avatar, Box, IconButton, Stack, Button } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/store/hooks";
import { uploadProfilePicture } from "@/features/profile/profileThunks";
import { UserType } from "@/features/profile/profileTypes";

interface Props {
    user: UserType;
    isPhotoLoading: boolean;
}

export default function ProfileAvatar({ user, isPhotoLoading }: Props) {
    const dispatch = useAppDispatch();

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const MAX_SIZE = 4 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            toast.error("File size must be less than 4MB", { duration: 3000 });
            return;
        }

        setSelectedImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleCancel = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSave = async () => {
        if (!selectedImage) return;

        try {
            await dispatch(uploadProfilePicture({ photo: selectedImage })).unwrap();
            toast.success("Profile picture updated successfully", { duration: 3000 });
            handleCancel();
        } catch {
            toast.error("Failed to update profile picture", { duration: 3000 });
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                mb: 2
            }}
        >
            <Box sx={{ position: "relative" }}>
                <Avatar
                    src={previewUrl || user.photo}
                    alt={user.name}
                    sx={{
                        width: 100,
                        height: 100,
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                            opacity: 0.85,
                        },
                    }}
                    onClick={handleAvatarClick}
                />

                {!previewUrl && (
                    <IconButton
                        onClick={handleAvatarClick}
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            color: "text.primary",
                            bgcolor: "background.paper",
                            transition: "0.3s",
                            "&:hover": {
                                bgcolor: "background.paper",
                            }
                        }}
                        size="small"
                    >
                        <PhotoCameraIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>

            <input
                type="file"
                accept="image/*"
                hidden
                ref={fileInputRef}
                onChange={handleFileChange}
            />

            {previewUrl && (
                <Stack direction="row" spacing={2} mt={2}>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleSave}
                        disabled={isPhotoLoading}
                    >
                        {isPhotoLoading ? "Saving..." : "Save"}
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                </Stack>
            )}
        </Box>
    );
}
