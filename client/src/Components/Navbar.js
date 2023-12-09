import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import "./style.css";
const drawerWidth = 240;


function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 2, fontWeight: '900' }}>
                Coupon<span className='star'>*</span>Wink
            </Typography>
            <Divider />
            <List>
                <Box>
                    <ListItemButton>
                        <NavLink to='/'>Home</NavLink >
                    </ListItemButton>
                    <ListItemButton>
                        <NavLink to='/#'>Stories</NavLink >
                    </ListItemButton>
                </Box>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>

            <AppBar component="nav" sx={{
                backgroundColor: "#fff",
                boxShadow: "none",
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                padding: '10px 0'
            }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none', color: 'black' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, color: 'black', fontWeight: '900' }}
                        >
                            Coupon<span className='star'>*</span>Wink
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <NavLink to='/'>Home</NavLink >
                        <NavLink to='#'>Stories</NavLink >
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" >
                <Toolbar />

            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;