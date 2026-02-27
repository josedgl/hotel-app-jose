import { Box, Button, Typography } from "@mui/material"
import ultragroupla_logo from '../../../../../main/Assets/ultragroupla_logo.png'
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../../main/Hooks/useAuth";

const Content = styled(Box)(
    () => `
      height: 100vh;
      width: 100%;
      justify-content: center;
  `
  );

const LogoutPage =()=>{
    const { logout } = useAuth();
    const navigate = useNavigate();

    const cleanSession = () => {
        localStorage.clear();
        logout();
        navigate('/login');
    }

    const onlyCloseSession = () => {
        logout();
        navigate('/login');
    }


    return(
        <Content >
            <Box display="flex" justifyContent="center" pb={2}>
                <Box display="flex" justifyContent="center" p={5}>
                    <img width="270" style={{borderRadius:"8px"}} src={ultragroupla_logo} alt={'ultragroupla_logo'}/>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" p={5} pb={2}>
                <Box>
                    <Box display="flex" justifyContent="center" p={5} pb={2}>
                        <Typography variant="h4">
                            Estas cerrando sesión, desea limpiar su sesión?
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" p={5} pb={2}>
                        <Box justifyContent="center" p={2} >
                            <Button variant="contained" color="primary" href="/login" onClick={cleanSession}>
                                limpiar sesión
                            </Button>
                        </Box>
                        <Box justifyContent="center" p={2} >
                            <Button variant="outlined" color="primary" href="/" onClick={onlyCloseSession}>
                                solo cerrar sesión
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Content>
    )
}

export default LogoutPage