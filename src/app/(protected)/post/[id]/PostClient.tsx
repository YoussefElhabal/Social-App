"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPost } from "@/features/posts/postThunks";
import { Grid } from "@mui/material";
import Post from "@/app/_components/Post/Post";
import { PostSkeleton } from "@/app/_components/Skeleton/PostSkeleton";

export default function PostClient({ id }: { id: string }) {
    const dispatch = useAppDispatch();
    const { singlePost, isFetchingSinglePost } = useAppSelector((store) => store.posts)

    useEffect(() => {
        dispatch(fetchPost(id));
    }, [dispatch, id]);

    return <>
        <Grid container spacing={2} my={2} sx={{ minHeight: "100vh" }}>
            <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
            </Grid>

            <Grid size={{ xs: 10, sm: 10, md: 8, lg: 6 }}>
                {isFetchingSinglePost && <PostSkeleton />}
                {singlePost && <Post postDetails={singlePost} allComments />}
            </Grid>

            <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
            </Grid>
        </Grid>
    </>;
}
