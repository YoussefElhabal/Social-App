"use client";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Box, CardMedia, TextField } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PostType } from '@/features/posts/postTypes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/lib/formatDate';
import staticImage from '@/assets/images/profile.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface PostProps {
    postDetails: PostType;
    allComments?: boolean
}

export default function Post({ postDetails, allComments = false }: PostProps) {
    const router = useRouter();

    const handleUserNavigate = (id: string) => {
        router.push(`/user/${id}`)
    }

    const handleImageSrc = (path: string) => {
        const allKeywords = path.split("/");
        const lastKeyword = allKeywords[allKeywords.length - 1];
        if (lastKeyword === "undefined") {
            return staticImage;
        }
        return path;
    }

    const handleViewMore = (id: string) => {
        router.push(`/post/${id}`);
    }

    const comments = postDetails.comments;
    if (comments.length === 0) {
        return null;
    }

    return (
        <Card sx={{ my: 4, p: 1 }}>
            <CardHeader
                sx={{ p: 1 }}
                avatar={
                    <Avatar onClick={() => handleUserNavigate(postDetails.user._id)} sx={{ cursor: "pointer" }} aria-label="recipe">
                        <Image src={postDetails.user.photo} alt='image' width={50} height={50} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={postDetails.user.name}
                subheader={formatDate(postDetails.createdAt)}
                slotProps={{
                    title: {
                        sx: { cursor: "pointer" },
                        onClick: () => handleUserNavigate(postDetails.user._id),
                    },
                }}
            />

            <CardContent sx={{ px: 1 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {postDetails.body}
                </Typography>
            </CardContent>

            {!!postDetails.image && <CardMedia
                component="img"
                image={postDetails.image}
                alt="Post Image"
            />}

            <CardActions sx={{ justifyContent: "space-between" }}>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment">
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

            <Box component="section">
                <TextField fullWidth placeholder='add your comment...'></TextField>

                {allComments ? (
                    comments.map((comment) => (
                        <Box key={comment._id}>
                            <CardHeader
                                sx={{ pl: 1 }}
                                avatar={
                                    <Avatar sx={{ cursor: "pointer" }} aria-label="recipe">
                                        <Image onClick={() => handleUserNavigate(comment.commentCreator._id)} src={handleImageSrc(comment.commentCreator.photo)} alt={comment.commentCreator.name} width={50} height={50} />
                                    </Avatar>
                                }
                                title={comment.commentCreator.name}
                                subheader={comment.content}
                                action={formatDate(comment.createdAt)}
                                slotProps={{
                                    title: {
                                        sx: { cursor: "pointer" },
                                        onClick: () => handleUserNavigate(comment.commentCreator._id),
                                    },
                                    action: {
                                        sx: { fontSize: "14px" },
                                    },
                                }}
                            />
                        </Box>
                    ))
                ) : (
                    <Box>
                        <CardHeader
                            sx={{ pl: 1 }}
                            avatar={
                                <Avatar sx={{ cursor: "pointer" }} aria-label="recipe">
                                    <Image onClick={() => handleUserNavigate(comments[0].commentCreator._id)} src={handleImageSrc(comments[0].commentCreator.photo)} alt={comments[0].commentCreator.name} width={50} height={50} />
                                </Avatar>
                            }
                            title={comments[0].commentCreator.name}
                            subheader={comments[0].content}
                            action={formatDate(comments[0].createdAt)}
                            slotProps={{
                                title: {
                                    sx: { cursor: "pointer" },
                                    onClick: () => handleUserNavigate(comments[0].commentCreator._id),
                                },
                                action: {
                                    sx: { fontSize: "14px" },
                                },
                            }}
                        />

                        {comments.length > 1 && (
                            <Typography
                                onClick={() => handleViewMore(postDetails._id)}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    color: "text.secondary",
                                }}
                            >
                                View More Comments
                                <ArrowDropDownIcon />
                            </Typography>
                        )}
                    </Box>
                )}
            </Box>
        </Card>
    );
}
