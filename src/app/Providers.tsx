"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useMemo, useState } from "react";
import { ColorModeContext } from "@/theme/ColorModeContext";
import { getTheme } from '@/theme';
import { CssBaseline } from "@mui/material";

export default function Providers({ children }: { children: React.ReactNode }) {
    const getInitialMode = (): 'light' | 'dark' => {
        if (typeof window === 'undefined') return 'light';
        return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    };

    const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => {
                    const next = prev === 'light' ? 'dark' : 'light';
                    localStorage.setItem('theme', next);
                    return next;
                });
            },
        }),
        []
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    return (
        <AppRouterCacheProvider>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <Navbar />
                            {children}
                            <Footer />
                            <Toaster />
                        </PersistGate>
                    </Provider>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </AppRouterCacheProvider>
    );
}
