import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon, Table, TableCell, TableRow, Typography } from '@mui/material';

export const CustomersSearch = () => (
  <Card sx={{ py: 2, maxWidth:400 }}>
    
    <Table>
    <TableRow>
    <TableCell sx={{textAlign:'right'}}>
      N°,Titulo o asignado
    </TableCell>
    <OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Search ticket"
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 200 }}
    />
    </TableRow>

    </Table>
    
    
    
  </Card>
);
