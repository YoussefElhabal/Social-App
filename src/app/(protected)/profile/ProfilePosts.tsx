import { Box, Divider, Typography } from "@mui/material";
import Post from "@/app/_components/Post/Post";
import { PostSkeleton } from "@/app/_components/Skeleton/PostSkeleton";
import { PostType } from "@/features/posts/postTypes";

interface Props {
    userPosts: PostType[];
    isPostsLoading: boolean;
    hasFetchedPosts: boolean;
}

export default function ProfilePosts({ userPosts, isPostsLoading, hasFetchedPosts }: Props) {

    const showPostsTitle =
        !isPostsLoading && hasFetchedPosts && userPosts.length > 0;

    const showEmptyState =
        !isPostsLoading && hasFetchedPosts && userPosts.length === 0;

    return (
        <>
            {isPostsLoading && <PostSkeleton />}

            {showPostsTitle && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        my: 4,
                    }}
                >
                    <Divider sx={{ flex: 1 }} />
                    <Typography
                        variant="overline"
                        sx={{
                            mx: 2,
                            color: "text.secondary",
                            fontWeight: 500,
                            letterSpacing: "0.08em",
                        }}
                    >
                        Your posts
                    </Typography>
                    <Divider sx={{ flex: 1 }} />
                </Box>
            )}

            {showEmptyState && (
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ textAlign: "center", mt: 10 }}
                >
                    No posts yet. Create your first post.
                </Typography>
            )}

            {!isPostsLoading &&
                userPosts.map((post) => (
                    <Post key={post._id} postDetails={post} />
                ))}
        </>
    );
}
