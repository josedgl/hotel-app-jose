import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getCityNameById } from '../../../../../main/Utils/Lists/citiesList';
import { Typography } from '@mui/material';

export default function HotelsTable({hotels, openEditHotel}) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Ciudad</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels && hotels.length !== 0 && hotels.map((row) => (
            <TableRow
              onClick={()=> openEditHotel(row)}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{getCityNameById(row.city)}</TableCell>
              <TableCell align="right">
                <Typography color={row.status && 'primary'}>
                  {row.status ? "Activo" : "Inactivo"}
                </Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
