import { MouseEvent } from 'react';
import { IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import Link from 'next/link';

interface props {
    isLoggedIn: boolean;
    onProfileClick: (event: MouseEvent<HTMLElement>) => void
}

export default function AuthButtons({ isLoggedIn, onProfileClick }: props) {
    return isLoggedIn ? (
        <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={onProfileClick}
            color="inherit"
            disableRipple
            sx={{ p: 0, pr: 1 }}
        >
            <AccountCircle />
        </IconButton>
    ) : (
        <>
            <Link href="/login">
                <Button
                    variant="text"
                    sx={{
                        fontSize: 16,
                        color: "text.secondary",
                        p: 0,
                        "&:hover": {
                            backgroundColor: "transparent",
                            color: "text.primary",
                        }
                    }}
                >
                    Login
                </Button>
            </Link>
            <Link href="/signup">
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                        textTransform: "none",
                        fontSize: 15,
                    }}
                >
                    Register
                </Button>
            </Link>
        </>
    );
};