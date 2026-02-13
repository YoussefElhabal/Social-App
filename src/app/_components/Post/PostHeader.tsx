"use client";

import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PostType } from "@/features/posts/postTypes";
import { formatDate } from "@/lib/formatDate";
import PostMenu from "./PostMenu";
import { useAppSelector } from "@/store/hooks";

export default function PostHeader({ post }: { post: PostType }) {
    const router = useRouter();

    const handleUserNavigate = (id: string) => {
        router.push(`/user/${id}`);
    };

    const { user } = useAppSelector((state) => state.profile);

    return (
        <CardHeader
            sx={{ p: 1 }}
            avatar={
                <Avatar
                    onClick={() => handleUserNavigate(post.user._id)}
                    sx={{ cursor: "pointer" }}
                    aria-label="author"
                >
                    <Image
                        src={post.user.photo}
                        alt="user"
                        width={50}
                        height={50}
                    />
                </Avatar>
            }
            action={post.user._id === user?._id ? <PostMenu postId={post._id} /> : null}
            title={post.user.name}
            subheader={formatDate(post.createdAt)}
            slotProps={{
                title: {
                    sx: {
                        cursor: "pointer",
                        width: "fit-content",
                        "&:hover": { color: "secondary.main" },
                    },
                    onClick: () => handleUserNavigate(post.user._id),
                },
                subheader: {
                    sx: { color: "text.secondary", fontSize: "0.875rem" },
                },
            }}
        />
    );
}
