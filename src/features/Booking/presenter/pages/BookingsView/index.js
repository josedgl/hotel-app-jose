import React from 'react'
import {Box, Typography} from "@mui/material"
import { styled } from '@mui/material/styles';
import BookingsTable from "../../components/BookingsTable";
import { BookingContext } from "../../../../../main/Contexts/BookingContext";
import { HotelContext } from "../../../../../main/Contexts/HotelContext";
import { RoomContext } from "../../../../../main/Contexts/RoomContext";

const Content = styled(Box)(
    () => `
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
  `
  );


const BookingsViewPage =()=>{
    const { bookings } = React.useContext(BookingContext)
    const { rooms } = React.useContext(RoomContext)
    const { hotels } = React.useContext(HotelContext)



    return(
        <Content mb={8}>
            <Box display={'flex'} p={4}pb={2}>
                <Typography variant="h2">
                    Lista de reservas
                </Typography>
            </Box>
            <Box display={'flex'} justifyContent="center" p={4}>
                <BookingsTable bookings={bookings} rooms={rooms} hotels={hotels}/>
            </Box>
        </Content>
    )
}

export default BookingsViewPage