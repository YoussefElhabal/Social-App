"use client";

import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import { handleImageSrc } from "./utils";
import { CommentsType } from "@/features/posts/postTypes";
import { useRouter } from "next/navigation";

export default function CommentItem({ comment }: { comment: CommentsType }) {
    const router = useRouter();

    const handleUserNavigate = (id: string) => {
        router.push(`/user/${id}`)
    }

    return (
        <CardHeader
            sx={{ px: 0 }}
            avatar={
                <Avatar sx={{ cursor: "pointer" }} aria-label="comment-author">
                    <Image
                        onClick={() => { handleUserNavigate(comment.commentCreator._id) }}
                        src={handleImageSrc(comment.commentCreator.photo)}
                        alt={comment.commentCreator.name}
                        width={50}
                        height={50}
                    />
                </Avatar>
            }
            title={comment.commentCreator.name}
            subheader={comment.content}
            action={formatDate(comment.createdAt)}
            slotProps={{
                title: {
                    sx: {
                        cursor: "pointer",
                        "&:hover": { color: "secondary.main" },
                    },
                    onClick: () => handleUserNavigate(comment.commentCreator._id),
                },
                action: {
                    sx: { fontSize: "0.8rem", color: "text.secondary" },
                },
                subheader: {
                    sx: { color: "text.secondary" },
                },
            }}
        />
    );
}
