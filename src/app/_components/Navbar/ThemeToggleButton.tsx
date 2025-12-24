import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { ColorModeContext } from '@/theme/ColorModeContext';
import { motion, AnimatePresence } from 'framer-motion';
import IconButton from '@mui/material/IconButton';

export default function ThemeToggleButton() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <IconButton
            size="large"
            color="inherit"
            onClick={colorMode.toggleColorMode}
            disableRipple
            sx={{ p: 0, pt: 0.5 }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme.palette.mode === 'dark' ? (
                    <motion.div
                        key="light"
                        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.30, ease: 'easeOut' }}
                    >
                        <LightModeIcon />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.30, ease: 'easeOut' }}
                    >
                        <DarkModeIcon />
                    </motion.div>
                )}
            </AnimatePresence>
        </IconButton>
    )
}