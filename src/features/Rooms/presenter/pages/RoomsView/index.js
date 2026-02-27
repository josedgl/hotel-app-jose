import React, { useEffect, useState } from "react"
import {Box, Button, Dialog, Typography} from "@mui/material"
import { styled } from '@mui/material/styles';
import RoomsTable from "../../components/RoomsTable";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewRoom from "../../components/NewRoom";
import EditRoom from "../../components/EditRoom";
import { RoomContext } from "../../../../../main/Contexts/RoomContext";
import { HotelContext } from "../../../../../main/Contexts/HotelContext";

const Content = styled(Box)(
    () => `
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
  `
  );


const RoomsViewPage =()=>{
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState({show: false, data: null});
    const { rooms, setRooms } = React.useContext(RoomContext)
    const { hotels } = React.useContext(HotelContext)
    const [listhotels, setListhotels] = useState([]);

    useEffect(() => {
        if(!hotels) return;
      
        
        const newListhotels = hotels
        .filter((hotel) => hotel.status === true) 
        .map(hotel => {
            let newItem = {
                name: hotel.name,
                id: hotel.id
            }
            return newItem;
        })

        setListhotels(newListhotels);
    }, [hotels])
    

    const addNewRoom =(data)=>{
        const copyRooms = [...(rooms ?? [])];
        const newRoom = {
            id: copyRooms.length + 1,
            name: data.name,
            cost: data.cost,
            taxes: data.taxes,
            type: data.type,
            location: data.location,
            hotelId: data.hotelId,
            status: true
        }
        copyRooms.push(newRoom)
        setOpenCreateDialog(false);
        setRooms(copyRooms);
    }

    const editRoom =(data)=>{
            const copyRooms = [...(rooms ?? [])]; 
            const index = copyRooms.findIndex(room => room.id === data.id);
            if (index !== -1) {
                copyRooms[index] = {
                    ...copyRooms[index],
                    name: data.name,
                    cost: data.cost,
                    taxes: data.taxes,
                    type: data.type,
                    location: data.location,
                    status: data.status
                }
                setRooms(copyRooms);
            }
            setOpenEditDialog({show: false, data: null});
    }


    return(
        <Content mb={8}>
            <Box display={'flex'} p={4}pb={2}>
                <Typography variant="h2">
                    Lista de Habitaciones
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginLeft: 'auto' }} onClick={() => setOpenCreateDialog(true)}>
                    Agregar Habitación
                    <AddCircleOutlineOutlinedIcon sx={{ marginLeft: 1 }} />
                </Button>
            </Box>
            <Box display={'flex'} justifyContent="center" p={4}>
                <RoomsTable rooms={rooms} openEditRoom={(data) => setOpenEditDialog({show: true, data})}/>
            </Box>
            <Dialog
              open={openCreateDialog}
              onClose={() => setOpenCreateDialog(false)}
            >
                <NewRoom onCloseNew={() => setOpenCreateDialog(false)} additionalData={addNewRoom} listHotels={listhotels}/>
            </Dialog>
            <Dialog
              open={openEditDialog.show}
              onClose={() => setOpenEditDialog({show: false, data: null})}
            >
              <EditRoom data={openEditDialog.data} onCloseEdit={() => setOpenEditDialog({show: false, data: null})} editData={editRoom} listHotels={listhotels}/>
            </Dialog>
        </Content>
    )
}

export default RoomsViewPage