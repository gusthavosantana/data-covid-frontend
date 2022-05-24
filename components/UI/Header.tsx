import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Logo } from './Logo';

export function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit" sx={{
                py: 2
            }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Logo/>
                        <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}