import { useEffect, useState } from "react";
import { Autocomplete, Box, Dialog, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import CardsHotels from "../CardsHotels";
import { getCityNameById } from "../../../../../main/Utils/Lists/citiesList";
import ChoiceHotel from "../ChoiceHotel/ChoiceHotel";

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
`
);

const TravelerView = ({ hotels, rooms, saveReserveRoom }) => {
  const [listHotels, setListHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [dialogChoice, setDialogChoice] = useState({
    open: false,
    data: null
  });

  useEffect(() => {
    if (!hotels || hotels.length === 0) {
      setListHotels([]);
      return;
    }

    const options = hotels
      .filter((hotel) => hotel.status === true) 
      .map((hotel) => ({
        label: hotel.name,
        id: hotel.id,
        city: getCityNameById(hotel.city),
        rooms:
          rooms?.filter((room) => room.hotelId === hotel.id) || []
      }));

    setListHotels(options);
  }, [hotels, rooms]);

  const choiceHotel = (data) => {
    setDialogChoice({
      open: true,
      data: data
    });
  }

  const bridgeSaveReserve =(data)=>{
    saveReserveRoom(data)
    setDialogChoice({data: null, open: false})
  }

  return (
    <Content mb={8}>
      <Box display="flex" alignItems="center" pb={4}>
        <CalendarMonthOutlinedIcon />
        <Typography variant="h3" ml={2}>
          Bienvenido a Hotel App
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" pb={2}>
        <Typography variant="h5">
          Explora nuestros hoteles y reserva tu próxima estadía con facilidad.
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <Box p={2}>
          <Autocomplete
            disablePortal
            options={listHotels}
            value={selectedHotel}
            onChange={(event, newValue) => {
              setSelectedHotel(newValue);
            }}
            getOptionLabel={(option) => option?.label || ""}
            isOptionEqualToValue={(option, value) =>
              option.id === value.id
            }
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Hoteles" />
            )}
          />
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <CardsHotels
          hotels={selectedHotel ? [selectedHotel] : listHotels}
          choiceHotel={choiceHotel}
        />
      </Box>

        <Dialog open={dialogChoice.open} onClose={() => setDialogChoice({data: null, open: false})} maxWidth="lg" fullWidth>
            <ChoiceHotel 
            dataHotel={dialogChoice.data} 
            onCloseDialg={() => setDialogChoice({data: null, open: false})} 
            saveReserveRoom={bridgeSaveReserve}/>
        </Dialog>
    </Content>
  );
};

export default TravelerView;