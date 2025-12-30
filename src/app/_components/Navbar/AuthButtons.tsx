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
            <Link href='/login'>
                <Button sx={{ fontSize: "16px", color: "common.white", p: 0, minWidth: "auto" }}>Login</Button>
            </Link>
            <Link href='/signup'>
                <Button sx={{ fontSize: "16px", color: "common.white", p: 0, minWidth: "auto" }}>Register</Button>
            </Link>
        </>
    );
};