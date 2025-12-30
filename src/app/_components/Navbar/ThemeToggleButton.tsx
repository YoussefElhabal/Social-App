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
                {theme.palette.mode === "dark" ? (
                    <motion.div
                        key="light"
                        whileTap={{ scale: 0.9 }}
                        initial={{ y: 10, opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: -10, opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <LightModeIcon />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        whileTap={{ scale: 0.9 }}
                        initial={{ y: -10, opacity: 0, filter: "blur(4px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: 10, opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <DarkModeIcon />
                    </motion.div>
                )}
            </AnimatePresence>
        </IconButton>
    )
}