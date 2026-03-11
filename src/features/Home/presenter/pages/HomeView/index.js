import {useContext, useState } from "react";
import {Box, Snackbar, Alert} from "@mui/material"
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import useAuth from "../../../../../main/Hooks/useAuth";
import AdminView from "../../components/AdminView"
import TravelerView from "../../components/TravelerView"
import { HotelContext } from "../../../../../main/Contexts/HotelContext";
import { RoomContext } from "../../../../../main/Contexts/RoomContext";
import { BookingContext } from "../../../../../main/Contexts/BookingContext"

const Content = styled(Box)(
    () => `
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
  `
  );


const HomeViewPage =()=>{
  const [actionSnack, setActionSnack] = useState(false);
    const navigate = useNavigate()
    const { hotels } = useContext(HotelContext);
    const { rooms } = useContext(RoomContext);
    const { bookings, setBookings } = useContext(BookingContext);
    const { role } = useAuth()

    const saveReserveRoom =(data)=>{
        const copyBooking = [...(bookings ?? [])];
        const newData = {
            ...data,
            id : Date.now(),
        }
        copyBooking.push(newData)
        setActionSnack(true)
        setBookings(copyBooking) 
    }


    const onNavigate =(item)=>{
        if(item === "hotels"){
            navigate('/admin/hotel/list')
        }
        if(item === "rooms"){
            navigate('/admin/room/list')
        }
        if(item === "booking"){
            navigate('/admin/booking/list')
        }
    }

    return(
        <Content mb={8}>

            <Box display={'flex'} justifyContent="center" p={4}>
                {
                    role && role === "agencia" && (
                        <AdminView onNavigate={onNavigate}/>)
                }
                {
                    role && role === "viajero" && (
                        <TravelerView onNavigate={onNavigate} hotels={hotels} rooms={rooms} saveReserveRoom={saveReserveRoom}/>)
                }
            </Box>

            <Snackbar
                open={actionSnack}
                autoHideDuration={60000}
                onClose={()=>setActionSnack(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={()=>setActionSnack(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    ¡ Se ha reservado tu habitación correctamente !
                </Alert>
            </Snackbar>
        </Content>
    )
}

export default HomeViewPage