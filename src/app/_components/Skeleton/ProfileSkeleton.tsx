import { Box, Card, Divider, Skeleton, Stack } from "@mui/material";

export function ProfileSkeleton() {
    return (
        <Card
            sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                boxShadow: 2,
                p: 4,
                mb: 4,
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Skeleton variant="circular" width={100} height={100} animation="wave" />
            </Box>

            <Stack spacing={1} alignItems="center">
                <Skeleton variant="text" width={140} height={28} animation="wave" />
                <Skeleton variant="text" width={200} height={20} animation="wave" />
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Stack spacing={2}>
                {[1, 2, 3].map((i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Skeleton variant="text" width={100} animation="wave" />
                        <Skeleton variant="text" width={100} animation="wave" />
                    </Box>
                ))}
            </Stack>
        </Card>
    );
}
