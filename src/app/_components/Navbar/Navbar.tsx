"use client";

import { MouseEvent, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import { clearUserData } from '@/features/auth/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import ThemeToggleButton from './ThemeToggleButton';
import AuthButtons from './AuthButtons';

export default function Navbar() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { userToken } = useAppSelector((state: RootState) => state.auth);
    const isLoggedIn = Boolean(userToken);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
        if (!isLoggedIn) return;
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleMenuClose();
        setTimeout(() => {
            Cookies.remove("token");
            dispatch(clearUserData());
            toast.success("Logged out successfully");
            router.push("/login");
        }, 0);
    };

    const menuId = 'account-menu';

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                elevation={2}
                sx={{
                    bgcolor: "background.paper",
                    color: "text.primary",
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: { xs: 2, sm: 3 },
                    }}
                >
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            fontWeight: 700,
                            textDecoration: "none",
                            color: "text.primary",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Social App
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: "center", gap: 2.5 }}>
                        <AuthButtons isLoggedIn={isLoggedIn} onProfileClick={handleProfileMenuOpen} />
                        <ThemeToggleButton />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: "center", gap: 1.5 }}>
                        <AuthButtons isLoggedIn={isLoggedIn} onProfileClick={handleProfileMenuOpen} />
                        <ThemeToggleButton />
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem
                    component={Link}
                    href="/profile"
                    onClick={handleMenuClose}>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}
