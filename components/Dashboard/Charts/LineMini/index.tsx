import React from "react";
import { Box, Typography } from "@mui/material";

import "@fontsource/roboto";

// @ts-ignore
export function LineMini({ dados }) {

    return (
        <Box sx={{ widget: "100%" }}>
            <Typography variant="body1" sx={{ 
                fontFamily: 'Roboto',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0.25px",
                color: "#000000"
            }}>
                {dados.nome}
            </Typography>
            <Typography variant="h6" sx={{ 
                fontFamily: 'Roboto',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "34px",
                lineHeight: "36px",                
                color: "#000000",
            }}>
                {dados.valor}
            </Typography>
        </Box>
    );
}