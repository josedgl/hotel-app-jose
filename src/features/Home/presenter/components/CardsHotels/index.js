
import { Box, Divider, Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';


const CardBox = styled(Box)(
    () => `
    padding: 16px;
      cursor: pointer;
      border: 1px solid #e0e0e0;
      background-color: #fff;
      border-radius: 8px;
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  `
);


const CardsHotels =({hotels, choiceHotel})=>{    


    return(
        <Grid container spacing={2} justifyContent={"center"}>
            {hotels && hotels.map(hotel => (
                <Grid key={hotel.id} item p={2}>
                    <CardBox onClick={()=>choiceHotel(hotel)}>
                        <Box display={'flex'} justifyContent="center" alignItems={"center"} p={2}>                            
                            <Typography variant="h3">{hotel.label}</Typography>
                        </Box>
                        <Divider />
                        <Box display={'flex'} justifyContent="start" alignItems={"center"} p={2} pb={0}>                            
                            <Typography variant="h6" sx={{color: "gray"}}>Ciudad:</Typography>
                            <Typography variant="h6" ml={"8px"} >{hotel.city}</Typography>
                        </Box>
                        <Box display={'flex'} justifyContent="start" alignItems={"center"} p={2}>                               
                            <Typography variant="h6" sx={{color: "gray"}}>Habitaciones:</Typography>                     
                            <Typography variant="h6" ml={"8px"}>{hotel.rooms ? hotel.rooms.length : 0}</Typography>
                        </Box>
                    </CardBox>
                </Grid>
            ))}
        </Grid>
    )
}

export default CardsHotels