"use client"
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import { Drawer, DrawerHeader } from './muiLayoutStyle';
import { navigationItems1, navigationItems2, navigationItems3 } from './navigationData';
import Link from 'next/link';
import { Avatar, Tooltip, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { grey } from "@mui/material/colors";

interface Props {
    open?: boolean;
    handleDrawerClose: () => void;
}

function SideBar({ open, handleDrawerClose }: Props) {
    const theme = useTheme();
    const pathName = usePathname();

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <Avatar alt="me" src="/images/profile-pic.png"
                sx={{
                    mx: "auto", transition: "0.3s",
                    width: open ? 88 : 44, height: open ? 88 : 44, my: 1, border: "2px solid grey"
                }} />
            <Typography align='center' sx={{ fontSize: open ? 17 : 0, transition: "0.3s" }} >Mohamed Alaa</Typography>
            <Typography align='center' sx={{ fontSize: open ? 15 : 0, transition: "0.3s", color: theme.palette.info.main }} >Admin</Typography>

            <Divider />

            <List>
                {navigationItems1.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <Link href={item.href} style={{ all: "unset" }}>
                            <Tooltip title={open ? undefined : item.title} placement='left'>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        backgroundColor: pathName === item.href ? theme.palette.mode === "dark" ? grey[800] : grey[300] : undefined,
                                        px: 2.5,
                                    }}
                                >

                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <item.icon />
                                    </ListItemIcon>

                                    <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />

                                </ListItemButton>
                            </Tooltip>
                        </Link>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {navigationItems2.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <Link href={item.href} style={{ all: "unset" }}>
                            <Tooltip title={open ? undefined : item.title} placement='left'>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                        backgroundColor: pathName === item.href ? theme.palette.mode === "dark" ? grey[800] : grey[300] : undefined,
                                    }}
                                >

                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <item.icon />
                                    </ListItemIcon>

                                    <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />

                                </ListItemButton>
                            </Tooltip>
                        </Link>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {navigationItems3.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <Link href={item.href} style={{ all: "unset" }}>
                            <Tooltip title={open ? undefined : item.title} placement='left'>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        backgroundColor: pathName === item.href ? theme.palette.mode === "dark" ? grey[800] : grey[300] : undefined,
                                        px: 2.5,
                                    }}
                                >

                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <item.icon />
                                    </ListItemIcon>

                                    <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />

                                </ListItemButton>
                            </Tooltip>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideBar