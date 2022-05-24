import { Box, Typography } from "@mui/material";

import "@fontsource/roboto";

export function Logo({ white = false }: any) {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 400
    }}>
      <Typography variant="h1" sx={{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "43px",
        lineHeight: "51px",
        color: `${white ? '#ffffff' : "#000000"}`
      }}>
        Dados Covid-19 - DF
      </Typography>
      <Typography variant="h5" sx={{
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "10.7px",
        lineHeight: "13px",
        color: `${white ? '#ffffff' : "#000000"}`
      }}>
        Dados de Covid-19 no Distrito Federal (DF)
      </Typography>
    </Box>
  );
}