import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Skeleton,
} from "@mui/material";

export function PostSkeleton() {
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
            <CardHeader
                sx={{ p: 1 }}
                avatar={
                    <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        animation="wave"
                    />
                }
                title={
                    <Skeleton
                        variant="text"
                        width={120}
                        height={20}
                        animation="wave"
                    />
                }
                subheader={
                    <Skeleton
                        variant="text"
                        width={80}
                        height={16}
                        animation="wave"
                    />
                }
            />

            <CardContent sx={{ px: 1 }}>
                <Skeleton animation="wave" height={16} width="95%" />
                <Skeleton animation="wave" height={16} width="90%" />
                <Skeleton animation="wave" height={16} width="60%" />
            </CardContent>

            <Skeleton
                variant="rectangular"
                animation="wave"
                height={280}
                sx={{ borderRadius: 2, my: 1 }}
            />

            <CardActions sx={{ justifyContent: "space-between" }}>
                {[1, 2, 3].map((i) => (
                    <Skeleton
                        key={i}
                        variant="circular"
                        width={28}
                        height={28}
                        animation="wave"
                    />
                ))}
            </CardActions>

            <Box sx={{ px: 1, mt: 1 }}>
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    height={40}
                    sx={{ borderRadius: 2 }}
                />
            </Box>

            <Box sx={{ mt: 1 }}>
                <CardHeader
                    sx={{ px: 1 }}
                    avatar={
                        <Skeleton
                            variant="circular"
                            width={32}
                            height={32}
                            animation="wave"
                        />
                    }
                    title={
                        <Skeleton
                            variant="text"
                            width={100}
                            height={18}
                            animation="wave"
                        />
                    }
                    subheader={
                        <Skeleton
                            variant="text"
                            width="80%"
                            height={16}
                            animation="wave"
                        />
                    }
                />
            </Box>
        </Card>
    );
}
