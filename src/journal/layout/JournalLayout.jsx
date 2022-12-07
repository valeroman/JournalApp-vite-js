import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { NavBar, SideBar } from '../components';

const drawerwidth = 240;

export const JournalLayout = ({ children }) => {

    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerwidth={ drawerwidth } />

            <SideBar drawerWidth={ drawerwidth } />

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />

                { children }
            </Box>
        </Box>
    )
}
