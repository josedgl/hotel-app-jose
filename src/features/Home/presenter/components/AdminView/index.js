import PropTypes from 'prop-types';
import { Box, Grid, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';

const Content = styled(Box)(
    () => `
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
  `
);

const CardBox = styled(Box)(
    () => `
      cursor: pointer;
      border: 1px solid #e0e0e0;
      background-color: #fff;
      border-radius: 8px;
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  `
);



const AdminView =({onNavigate})=>{


    return(
        <Content mb={8}>
                <Grid container spacing={4}>
                    <Grid item size={{ xs: 12, md: 6, lg: 4, xl: 4 }}>
                        <CardBox >
                            <Box p={4} onClick={()=> onNavigate('hotels')}>                                
                                <Box display={'flex'} justifyContent="center" pb={2}>
                                    <BusinessOutlinedIcon />
                                </Box>
                                <Box display={'flex'} justifyContent="center">
                                    <Typography variant="h4">
                                        Hoteles
                                    </Typography>
                                </Box>
                                <Box display={'flex'} justifyContent="center">
                                </Box>
                            </Box>
                        </CardBox>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6, lg: 4, xl: 4 }}>
                        <CardBox >
                            <Box p={4} onClick={()=> onNavigate('rooms')}>                                
                                <Box display={'flex'} justifyContent="center" pb={2}>
                                    <BedOutlinedIcon />
                                </Box>
                                <Box display={'flex'} justifyContent="center">
                                    <Typography variant="h4">
                                        Habitaciones
                                    </Typography>
                                </Box>
                                <Box display={'flex'} justifyContent="center">
                                </Box>
                            </Box>
                        </CardBox>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6, lg: 4, xl: 4 }}>
                        <CardBox >
                            <Box p={4} onClick={()=> onNavigate('booking')}>                                
                                <Box display={'flex'} justifyContent="center" pb={2}>
                                    <CalendarMonthOutlinedIcon />
                                </Box>
                                <Box display={'flex'} justifyContent="center">
                                    <Typography variant="h4">
                                        Reservas
                                    </Typography>
                                </Box>
                                <Box display={'flex'} justifyContent="center">
                                </Box>
                            </Box>
                        </CardBox>
                    </Grid>
                </Grid>
        </Content>
    )
}


AdminView.propTypes = {
    onNavigate: PropTypes.any,
};
  
AdminView.defaultProps = {
    onNavigate: ()=>{},
};
  

export default AdminView