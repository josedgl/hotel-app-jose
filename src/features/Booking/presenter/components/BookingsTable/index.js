import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BookingsTable({bookings, rooms, hotels}) {

  const getNameHotel = (id) => {
      const hotel = hotels.find(item => item.id === id);
      return hotel ? hotel.name : 'Unknown Hotel';
  };

  const getNameRoom = (id) => {
      const room = rooms.find(item => item.id === id);
      return room ? room.name : 'Unknown Hotel';
  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre completo</TableCell>
            <TableCell>Tipo de documento</TableCell>
            <TableCell>Documento</TableCell>
            <TableCell >Fecha de nacimiento</TableCell>
            <TableCell>Genero</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Fecha de reserva</TableCell>
            <TableCell>Habitación</TableCell>
            <TableCell>Hotel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings && bookings.length !== 0 && bookings.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.documentType}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.documentNumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.birthDate}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.gender}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.phone}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.reserveDate}
              </TableCell>
              <TableCell component="th" scope="row">
                {getNameRoom(row.roomId)}
              </TableCell>
              <TableCell component="th" scope="row">
                {getNameHotel(row.hotelId)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
