"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPost } from "@/features/posts/postThunks";
import { Grid } from "@mui/material";
import Post from "@/app/_components/Post/Post";
import Loading from "@/app/_components/Loading/page";

export default function PostClient({ id }: { id: string }) {
    const dispatch = useAppDispatch();
    const { singlePost, isLoading } = useAppSelector((store) => store.posts)

    useEffect(() => {
        dispatch(fetchPost(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>
        {isLoading
            ?
            <Loading />
            :
            <Grid container spacing={2} my={2}>
                <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
                </Grid>
                <Grid size={{ xs: 10, sm: 10, md: 8, lg: 6 }}>
                    {singlePost && <Post postDetails={singlePost} allComments />}
                </Grid>
                <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
                </Grid>
            </Grid>
        }
    </>;
}
