import React, { useState } from "react"
import {Box, Button, Dialog, Typography} from "@mui/material"
import { styled } from '@mui/material/styles';
import HotelsTable from "../../components/HotelsTable";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewHotel from "../../components/NewHotel";
import EditHotel from "../../components/EditHotel";
import { HotelContext } from "../../../../../main/Contexts/HotelContext";

const Content = styled(Box)(
    () => `
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
  `
  );


const HotelsViewPage =()=>{
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState({show: false, data: null});
    const { hotels, setHotels } = React.useContext(HotelContext)
    

    const addNewHotel =(data)=>{
        const copyHotels = [...(hotels ?? [])];

        const newHotel = {
            id: copyHotels.length + 1,
            name: data.name,
            city: data.city,
            status: true
        }
        copyHotels.push(newHotel)
        setOpenCreateDialog(false);
        setHotels(copyHotels);
    }

    const editHotel =(data)=>{
            const copyHotels = [...(hotels ?? [])]; 
            const index = copyHotels.findIndex(hotel => hotel.id === data.id);
            if (index !== -1) {
                copyHotels[index] = {
                    ...copyHotels[index],
                    name: data.name,
                    city: data.city,
                    status: data.status
                }
                setHotels(copyHotels);
            }
            setOpenEditDialog({show: false, data: null});
    }


    return(
        <Content mb={8}>
            <Box display={'flex'} p={4}pb={2}>
                <Typography variant="h2">
                    Lista de Hoteles
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginLeft: 'auto' }} onClick={() => setOpenCreateDialog(true)}>
                    Agregar Hotel
                    <AddCircleOutlineOutlinedIcon sx={{ marginLeft: 1 }} />
                </Button>
            </Box>
            <Box display={'flex'} justifyContent="center" p={4}>
                <HotelsTable hotels={hotels} openEditHotel={(data) => setOpenEditDialog({show: true, data})}/>
            </Box>
            <Dialog
              open={openCreateDialog}
              onClose={() => setOpenCreateDialog(false)}
            >
              <NewHotel onCloseNew={() => setOpenCreateDialog(false)} additionalData={addNewHotel}/>
            </Dialog>
            <Dialog
              open={openEditDialog.show}
              onClose={() => setOpenEditDialog({show: false, data: null})}
            >
              <EditHotel data={openEditDialog.data} onCloseEdit={() => setOpenEditDialog({show: false, data: null})} editData={editHotel}/>
            </Dialog>
        </Content>
    )
}

export default HotelsViewPage