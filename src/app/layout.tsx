"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorModeContext, useMode } from "../../public/mui/useMode";
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { DrawerHeader } from "../components/muiLayoutStyle";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [theme, colorMode] = useMode();


  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React.js, React, Next.js, Next, CSS, Material Ui, PostgreSQL, Frontend, Front-end ,fullstack ,full-stack" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Mohamed Alaa" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <title>Admin</title>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>

              <Header open={open} handleDrawerOpen={handleDrawerOpen} />
              <SideBar open={open} handleDrawerClose={handleDrawerClose} />

              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
              </Box>

            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
