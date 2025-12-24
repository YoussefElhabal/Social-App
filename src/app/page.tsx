"use client";

import { Grid } from "@mui/material";
import Post from "./_components/Post/Post";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { fetchPosts } from "@/features/posts/postThunks";
import { PostType } from "@/features/posts/postTypes";

export default function Home() {
  const { posts } = useAppSelector((store) => store.post)

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <Grid container spacing={2} my={2}>
        <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        </Grid>
        <Grid size={{ xs: 10, sm: 10, md: 8, lg: 6 }}>
          {posts.map((post: PostType) => <Post key={post._id} postDetails={post} />)}
        </Grid>
        <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }}>
        </Grid>
      </Grid>
    </>
  );
}
