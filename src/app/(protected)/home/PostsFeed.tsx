"use client";

import { Grid } from "@mui/material";
import Post from "@/app/_components/Post/Post";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { fetchPosts } from "@/features/posts/postThunks";
import { PostType } from "@/features/posts/postTypes";
import PostCreation from "@/app/_components/PostCreation/PostCreation";
import { PostSkeleton } from "@/app/_components/Skeleton/PostSkeleton";

export default function PostsFeed() {
    const dispatch = useAppDispatch();
    const { allPosts, isFetchingPosts } = useAppSelector((store) => store.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <>
            <Grid container spacing={2} my={2}>
                <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
                </Grid>

                <Grid size={{ xs: 10, sm: 10, md: 8, lg: 6 }}>
                    <PostCreation />
                    {isFetchingPosts && Array.from({ length: 3 }).map((_, i) => <PostSkeleton key={i} />)}
                    {allPosts.map((post: PostType) => <Post key={post._id} postDetails={post} />)}
                </Grid>

                <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
                </Grid>
            </Grid>
        </>
    )
}
