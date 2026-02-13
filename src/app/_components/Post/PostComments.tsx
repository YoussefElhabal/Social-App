"use client";

import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { PostType } from "@/features/posts/postTypes";
import { useRouter } from "next/navigation";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

export default function PostComments({ post, allComments }: { post: PostType; allComments: boolean; }) {
    const router = useRouter();

    const comments = post.comments ?? [];

    const sortedComments = [...comments].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    const latestComment = sortedComments[0] ?? null;

    return (
        <Box sx={{ px: 1 }}>
            <CommentInput />

            {allComments
                ? sortedComments.map((c) => (
                    <CommentItem key={c._id} comment={c} />
                ))
                : latestComment && <CommentItem comment={latestComment} />}

            {!allComments && comments.length > 1 && (
                <Typography
                    onClick={() => router.push(`/post/${post._id}`)}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: "secondary.main",
                        fontWeight: 500,
                        mt: 0.5,
                    }}
                >
                    View More Comments
                    <ArrowDropDownIcon />
                </Typography>
            )}
        </Box>
    );
}
