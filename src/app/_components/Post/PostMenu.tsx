"use client";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MouseEvent, useState } from "react";

export default function PostMenu({ postId }: { postId: string }) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleEdit = () => {
        console.log("Edit post", postId);
        handleClose();
    };

    const handleDelete = () => {
        console.log("Delete post", postId);
        handleClose();
    };

    return (
        <>
            <IconButton
                aria-label="settings"
                onClick={handleOpen}
                sx={{ color: "text.secondary" }}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem sx={{ color: "error.main" }} onClick={handleDelete}>
                    Delete
                </MenuItem>
            </Menu>
        </>
    );
}
