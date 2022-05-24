import { Box } from '@mui/material';
import { LineMini } from '@/components/Dashboard/Charts';

export function DataMiniGraph({ qt_data }: any) {
    return (
        <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ width: "100%", padding: "0 30px"}}>
                <LineMini dados={qt_data.qt_novos} />
            </Box>
            <Box sx={{ width: "100%", padding: "0 30px" }}>
                <LineMini dados={qt_data.qt_total} />
            </Box>
        </Box>
    )
}