import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PostType } from '@/features/posts/postTypes';
import Image from 'next/image';

interface PostProps {
    postDetails: PostType;
}

export default function Post({ postDetails }: PostProps) {
    return (
        <Card sx={{ my: 4, p: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500], cursor: "pointer" }} aria-label="recipe">
                        <Image src={postDetails.user.photo} alt='image' width={50} height={50} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={postDetails.user.name}
                subheader={postDetails.createdAt}
                slotProps={{
                    title: {
                        sx: { cursor: "pointer" }
                    },
                }}
            />
            <CardContent>
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
        </Card>
    );
}
