'use client'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Header from './Header';
import SideBar from './Sidebar';
import { DrawerHeader } from './muiLayoutStyle';

function Layout() {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Header open={open} handleDrawerOpen={handleDrawerOpen} />
            <SideBar open={open} handleDrawerClose={handleDrawerClose} />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography paragraph>

                </Typography>
                <Typography paragraph>

                </Typography>
            </Box>
        </Box>
    )
}

export default Layout