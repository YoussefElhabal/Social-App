import { Stack, Typography, Divider } from "@mui/material";
import { formatDate } from "@/lib/formatDate";
import ProfileRow from "./ProfileRow";
import { UserType } from "@/features/profile/profileTypes";

interface Props {
    user: UserType;
}

export default function ProfileInfo({ user }: Props) {
    const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

    return (
        <>
            <Stack spacing={0.5} alignItems="center">
                <Typography
                    variant="h6"
                    fontWeight={600}
                    color="text.primary"
                >
                    {user.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {user.email}
                </Typography>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Stack spacing={2}>
                <ProfileRow
                    label="Date of birth"
                    value={formatDate(user.dateOfBirth)}
                />
                <ProfileRow
                    label="Gender"
                    value={capitalize(user.gender)}
                />
                <ProfileRow
                    label="Joined"
                    value={formatDate(user.createdAt)}
                />
            </Stack>
        </>
    );
}
