import { Box, Typography } from "@mui/material";
import { CasosTab } from "./Casos";
import { VacinaTab } from "./Vacina";

const titleMap: { [key: string]: string } = {
  vacina: 'Doses Aplicadas',
  casos: 'Casos de COVID 19',
};

export function TabContent({ active }: { active: string }) {
  let render;
  switch (active) {
    case 'vacina':
      render = <VacinaTab />
      break;
    case 'casos':
      render = <CasosTab />
      break;
    default:
      break;

  }
  return (
    <div style={{ padding: 20, maxHeight: 1050, overflow: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Typography variant='h5' mb={2} sx={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '23px',
          display: 'flex',
          alignItems: 'center',
          color: '#3F434A',
          paddingLeft: '10px'
        }}>
          {titleMap[active]}
        </Typography>
      </Box>
      {render}
    </div >
  );
}