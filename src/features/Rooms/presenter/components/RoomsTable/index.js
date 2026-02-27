import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getTypeRoom } from '../../../../../main/Utils/Lists/roomsTypes';
import { Typography } from '@mui/material';

export default function RoomsTable({rooms, openEditRoom}) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Costos</TableCell>
            <TableCell align="right">Impuestos</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Ubicación</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms && rooms.length !== 0 && rooms.map((row) => (
            <TableRow
              onClick={()=> openEditRoom(row)}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                ${row.cost}
              </TableCell>
              <TableCell align="right">
                ${row.taxes}
              </TableCell>
              <TableCell align="right">
                {getTypeRoom(row.type)}
              </TableCell>
              <TableCell align="right">
                {row.location}
              </TableCell>
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
