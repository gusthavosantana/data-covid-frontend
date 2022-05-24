import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Logo } from './Logo';

export function Footer() {
    return (
        <AppBar position="static" color="inherit" sx={{ backgroundColor: '#165A96', padding: 1 }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Logo white />
                </Toolbar>
            </Container>
        </AppBar>
    );
};