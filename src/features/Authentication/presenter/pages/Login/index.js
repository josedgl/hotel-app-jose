import { useEffect, useState, useContext } from "react";
import { Box, Button, IconButton, TextField, Dialog, Typography } from "@mui/material"
import ultragroupla_logo from '../../../../../main/Assets/ultragroupla_logo.png'
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom'
import useAuth from "../../../../../main/Hooks/useAuth";
import { SessionContext } from "../../../../../main/Contexts/SessionContext";

const Content = styled(Box)(
    () => `
      display: flex;
      height: 100vh;
      width: 100%;
      flex: 1;
      justify-content: center;
      flex-direction: column;
  `
  );

const LoginPage =()=>{
    const { setSession } = useContext(SessionContext);
    const [value, setValue] = useState(null)
    const [disabledButton, setDisabledButton] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const [openModalError, setOpenModalError] = useState({show: false, message: '-'});
    const navigate = useNavigate()
    const { login } = useAuth();

    useEffect(()=>{
        if(value){
            if(value.user !== '' && value.password !== '' && value.user !== undefined && value.password !== undefined){
                setDisabledButton(false)
            }else{
                setDisabledButton(true)
            }
        }
    },[value])

    const handleChange =(tag, e)=>{
        const newData = {...value}

        if(!newData[tag]){
            newData[tag]={}
        }
        if(newData[tag]){
            newData[tag]= e.target.value
        }
        setValue(newData)
    }

    const visibilityPass =()=>{
        if(showPassword){
            return(
                <IconButton onClick={()=> setShowPassword(false)}>
                    <VisibilityOff/>
                </IconButton>
            )
        }else{
            return(
                <IconButton onClick={()=> setShowPassword(true)}>
                    <Visibility/>
                </IconButton>
            )
        }
    }

    const getRole =(item)=>{
        if(item){
          const role = item.split('@')
          const role2 = role[1].split('.com')
          return role2[0]
        }
      }

    const sigIn =async()=>{
        try {
            const response = await login(value.user, value.password);
            navigate('/home')
            const sessionQuery = {}
            sessionQuery['token'] = response.user.multiFactor.user.accessToken
            sessionQuery['uid'] = response.user.multiFactor.user.uid
            sessionQuery['role'] = getRole(value.user)

            setSession(sessionQuery)
          } catch (err) {
            setOpenModalError(true)
            console.error('[error]:', err.message);
            if(err.message.includes('password') || err.message.includes('user') || err.message.includes('invalid')){
                setOpenModalError({show: true, message: "Usuario o contraseña incorrectos"})
            }else{
                setOpenModalError({show: true, message: "En este momento los servicios no responden"})
            }
          }
    }

    return(
        <Content >
                <Box display="flex" justifyContent="center" p={5} pb={1}>
                    <Box display="flex" justifyContent="center" p={5}>
                        <img width="270" style={{borderRadius:"8px"}} src={ultragroupla_logo} alt={'ultragroupla_logo'}/>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box>
                        <Box display="flex" justifyContent="center" p={5} pb={2}>
                            <TextField 
                            error={value ? (value.user ? false : true) : false}
                            helperText={value ? (value.user ? false : 'Ingresa usuario') : false}
                            sx={{width:'270px'}}
                            onChange={(e)=> handleChange('user', e)}
                            id="outlined-basic" 
                            label="Usuario:" 
                            variant="outlined" 
                            />
                        </Box>
                        <Box display="flex" justifyContent="center" p={5} pt={1}>
                            <TextField 
                            sx={{width:'270px'}}
                            error={value ? (value.password ? false : true) : false}
                            helperText={value ? (value.password ? false : 'Ingresa contraseña') : false}
                            onChange={(e)=> handleChange('password', e)}
                            id="outlined-basic" 
                            label="Contraseña:" 
                            variant="outlined" 
                            type={showPassword ? '' :'password'}
                            InputProps={{
                            endAdornment: 
                            <InputAdornment position="end" >
                                {visibilityPass()}
                            </InputAdornment>,
                            }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="center" p={5} pt={1}>
                            <Button 
                            disabled={disabledButton}
                            onClick={()=> sigIn()}
                            variant="contained"
                            > 
                                Ingresar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            <Dialog open={openModalError.show} onClose={()=>setOpenModalError({show: false})} maxWidth={'sm'}>
                <Box>
                    <Box display={'flex'} justifyContent={'center'} p={8}>
                        <Typography variant="h5">{openModalError.message}</Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} pb={5}>
                        <Button variant="contained" onClick={()=>setOpenModalError({show: false})}> Cerrar</Button>
                    </Box>
                </Box>
            </Dialog>

        </Content>
    )
}

export default LoginPage