"use client";

import { ProfileSkeleton } from "@/app/_components/Skeleton/ProfileSkeleton";
import { fetchProfile, fetchUserPosts } from "@/features/profile/profileThunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Card, Grid } from "@mui/material";
import { useEffect } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

export default function Profile() {
    const dispatch = useAppDispatch();
    const {
        user,
        isProfileLoading,
        userPosts,
        isPostsLoading,
        hasFetchedPosts,
        isPhotoLoading
    } = useAppSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    useEffect(() => {
        if (user?._id) dispatch(fetchUserPosts(user._id));
    }, [dispatch, user?._id]);

    return (
        <Grid container spacing={2} my={2} sx={{ minHeight: "100vh" }}>
            <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }} />

            <Grid size={{ xs: 10, sm: 10, md: 8, lg: 6 }}>
                {isProfileLoading && <ProfileSkeleton />}

                {!isProfileLoading && user &&
                    <Card
                        sx={{
                            bgcolor: "background.paper",
                            borderRadius: 3,
                            boxShadow: 2,
                            p: 4,
                            mb: 4,
                        }}
                    >
                        <ProfileAvatar user={user} isPhotoLoading={isPhotoLoading} />
                        <ProfileInfo user={user} />
                    </Card>
                }

                <ProfilePosts
                    userPosts={userPosts}
                    isPostsLoading={isPostsLoading}
                    hasFetchedPosts={hasFetchedPosts}
                />
            </Grid>

            <Grid size={{ xs: 1, sm: 1, md: 2, lg: 3 }} />
        </Grid>
    );
}
