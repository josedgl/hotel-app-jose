import React from "react";
import { AppBar, Box, Button, Typography, Toolbar } from "@mui/material"
import { styled } from '@mui/material/styles';
import ultragroupla_logo from '../../../../../main/Assets/ultragroupla_logo.png'
import { useNavigate } from 'react-router-dom'

const Content = styled(Box)(
    () => `
      display: flex;
      height: 70vh;
      width: 100%;
      flex: 1;
      justify-content: center;
      flex-direction: column;
  `
  );
const OutSessionPage =()=>{
    const navigate = useNavigate()

    const navigateToLogin =()=>{
        navigate('/')
    }

    return(
        <>
            
            <AppBar position="static">
                <Toolbar sx={{justifyContent: "center"}}>
                    <Box display={'flex'} justifyContent="center" p={2}>
                        <img width="110" src={ultragroupla_logo} alt={'ultragroupla_logo'}/>
                    </Box>
                </Toolbar>
            </AppBar>
            <Content >
                <Box display={'flex'} justifyContent="center" p={2}>
                    <Typography variant="h3"> Tu sesión ha expirado !</Typography>
                </Box>
                <Box display={'flex'} justifyContent="center" p={2}>
                    <Typography variant="bosy1" align="center"> 
                    Debes iniciar sesión de nuevo para acceder a las funcionalidades de la apliación
                    </Typography>
                </Box>
                <Box display={'flex'} justifyContent="center" p={2}>
                    <Box>
                        <Button variant="contained" sx={{p:1, px:4}} onClick={navigateToLogin}>Iniciar sesión</Button>
                    </Box>
                </Box>
            </Content>
        </>
    )
}

export default OutSessionPage