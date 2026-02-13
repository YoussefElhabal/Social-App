"use client";

import Card from "@mui/material/Card";
import { PostType } from "@/features/posts/postTypes";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostComments from "./PostComments";

interface PostProps {
    postDetails: PostType;
    allComments?: boolean;
}

export default function Post({ postDetails, allComments = false }: PostProps) {
    return (
        <Card
            sx={{
                bgcolor: "background.paper",
                my: 4,
                p: 2,
                borderRadius: 2,
                boxShadow: 1,
            }}
        >
            <PostHeader post={postDetails} />
            <PostContent body={postDetails.body} />
            <PostImage image={postDetails.image} />
            <PostActions />
            <PostComments post={postDetails} allComments={allComments} />
        </Card>
    );
}
