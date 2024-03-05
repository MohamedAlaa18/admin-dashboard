import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Fade, IconButton, Menu, MenuItem, Stack, useTheme } from '@mui/material';
import { AppBar, Search, SearchIconWrapper, StyledInputBase } from './muiLayoutStyle';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useContext, useState } from 'react';
import { ColorModeContext } from '../../public/mui/useMode';

interface Props {
    open?: boolean;
    handleDrawerOpen: () => void;

}
function Header({ open, handleDrawerOpen }: Props) {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    if (!colorMode) {
        throw new Error('ColorModeContext not found');
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar sx={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Box flexGrow={1} />

                <Stack direction={"row"}>
                    {theme.palette.mode === "light" ? (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "currentMode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                            <LightModeOutlinedIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem(
                                    "currentMode",
                                    theme.palette.mode === "dark" ? "light" : "dark"
                                );
                                colorMode.toggleColorMode();
                            }}
                            color="inherit"
                        >
                            <DarkModeOutlinedIcon />
                        </IconButton>
                    )}

                    <IconButton color="inherit">
                        <NotificationsOutlinedIcon />
                    </IconButton>

                    <IconButton color="inherit"
                        id="fade-button"
                        aria-controls={openMenu ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleClick}>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                    <IconButton color="inherit">
                        <Person2OutlinedIcon />
                    </IconButton>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}

export default Header