import {  useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { getTypeRoom } from '../../../../../main/Utils/Lists/roomsTypes';

import {
    Box,
    Button,
    FormControl,
    Select,
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    Grid,
    Divider,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
} from '@mui/material';

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
    }
`
);

export default function ChoiceHotel({ dataHotel, onCloseDialg, saveReserveRoom }) {
  const [choiceRoom, setChoiceRoom] = useState(null);
  const [reserveRoom, setReserveRoom] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    documentType: '',
    documentNumber: '',
    birthDate: '',
    gender: '',
    email: '',
    phone: '',
    reserveDate: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const acceptReserve = (data) => { 
    const newReserve = {
        ...data.reservation,
        roomId : data.room.id,
        hotelId : data.room.hotelId
    }
    const {birthDate, documentNumber, documentType, email, fullName, gender, hotelId, phone, reserveDate, roomId} = newReserve
    if(birthDate !== "" && 
        documentNumber !== "" && 
        documentType !== "" && 
        email !== "" && 
        fullName !== "" && 
        gender !== "" && 
        hotelId !== "" && 
        reserveDate !== "" && 
        phone !== "" &&
        roomId !== ""){
            saveReserveRoom(newReserve)
    }else{
        setShowAlert(true)
    }
  }


  return (
    <Box>
      <DialogTitle sx={{ m: 0, p: 2, fontSize: '1.5rem' }}>
        {dataHotel && dataHotel.label}
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onCloseDialg}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        <Box p={4} pt={0}>
          <Box mt={2} display="flex" justifyContent="start">
            <Typography sx={{ color: 'gray' }}>
              Estan son las habitaciones disponibles en el hotel
            </Typography>
          </Box>

          <Box mt={2} display="flex" justifyContent="start">
            <Typography sx={{ color: 'gray' }}>
              Buscar fecha:
            </Typography>
          </Box>

          <Box mt={2} display="flex" justifyContent="start">
            {!choiceRoom && (
              <Grid container spacing={2} justifyContent="center">
                {dataHotel &&
                  dataHotel.rooms.length !== 0 &&
                  dataHotel.rooms.map((item) => (
                    <Grid key={item.id} item xs={12} md={6} lg={4}>
                      <CardBox onClick={() => setChoiceRoom(item)}>
                        <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                          <Typography variant="h3">{item.name}</Typography>
                        </Box>

                        <Divider />

                        <Box display="flex" alignItems="center" p={2} pb={0}>
                          <Typography variant="h6" sx={{ color: 'gray' }}>
                            Costo:
                          </Typography>
                          <Typography variant="h6" ml="8px">
                            ${item.cost}
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" p={2}>
                          <Typography variant="h6" sx={{ color: 'gray' }}>
                            Impuesto:
                          </Typography>
                          <Typography variant="h6" ml="8px">
                            ${item.taxes}
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" p={2}>
                          <Typography variant="h6" sx={{ color: 'gray' }}>
                            Tipo:
                          </Typography>
                          <Typography variant="h6" ml="8px">
                            {getTypeRoom(item.type)}
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" p={2}>
                          <Typography variant="h6" sx={{ color: 'gray' }}>
                            Ubicación:
                          </Typography>
                          <Typography variant="h6" ml="8px">
                            {item.location}
                          </Typography>
                        </Box>
                      </CardBox>
                    </Grid>
                  ))}
              </Grid>
            )}

            {choiceRoom && (
              <CardBox display="flex" flexDirection="column" justifyContent="center" p={2}>
                <Typography variant="h3" textAlign="center">
                  {choiceRoom.name}
                </Typography>

                <Divider />

                <Box display="flex" justifyContent="space-between" p={2} pb={0}>
                  <Box mr={4}>
                    <Typography variant="h6" sx={{ color: 'gray' }}>
                      Costo:
                    </Typography>
                    <Typography variant="h6">${choiceRoom.cost}</Typography>
                  </Box>

                  <Box mr={4}>
                    <Typography variant="h6" sx={{ color: 'gray' }}>
                      Impuesto:
                    </Typography>
                    <Typography variant="h6">${choiceRoom.taxes}</Typography>
                  </Box>
                </Box>

                <Box display="flex" justifyContent="space-between" p={2} pb={0}>
                  <Box mr={4}>
                    <Typography variant="h6" sx={{ color: 'gray' }}>
                      Tipo:
                    </Typography>
                    <Typography variant="h6">
                      {getTypeRoom(choiceRoom.type)}
                    </Typography>
                  </Box>

                  <Box mr={4}>
                    <Typography variant="h6" sx={{ color: 'gray' }}>
                      Ubicación:
                    </Typography>
                    <Typography variant="h6">
                      {choiceRoom.location}
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" justifyContent="center" p={2}>
                  {reserveRoom && (
                    <Box width="100%">
                      <Box textAlign="center" p={2}>
                        <Typography variant="h6" color="gray">
                          Ingresa la siguiente información para reservar la habitación
                        </Typography>
                      </Box>

                      <Box p={2}>
                        <TextField
                          id="fullName"
                          name="fullName"
                          label="Nombre Completo"
                          fullWidth
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </Box>

                      <Box p={2}>
                        <FormControl fullWidth>
                          <InputLabel id="documentType-label">
                            Tipo de Identificación
                          </InputLabel>
                          <Select
                            labelId="documentType-label"
                            id="documentType"
                            name="documentType"
                            value={formData.documentType}
                            label="Tipo de Identificación"
                            onChange={handleChange}
                          >
                            <MenuItem value="cc">Cédula de Ciudadanía</MenuItem>
                            <MenuItem value="ce">Cédula de Extranjería</MenuItem>
                            <MenuItem value="passport">Pasaporte</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>

                      <Box p={2}>
                        <TextField
                          id="documentNumber"
                          name="documentNumber"
                          label="Número de Identificación"
                          fullWidth
                          value={formData.documentNumber}
                          onChange={handleChange}
                        />
                      </Box>

                      <Box p={2}>
                        <TextField
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          label="Fecha de Nacimiento"
                          fullWidth
                          value={formData.birthDate}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Box>

                      <Box p={2}>
                        <TextField
                          id="reserveDate"
                          name="reserveDate"
                          type="date"
                          label="Fecha de Reserva"
                          fullWidth
                          value={formData.reserveDate}
                          onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                        />
                      </Box>

                      <Box p={2}>
                        <FormControl>
                          <FormLabel id="gender-label">Género</FormLabel>
                          <RadioGroup
                            row
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="masculino"
                              control={<Radio />}
                              label="Masculino"
                            />
                            <FormControlLabel
                              value="femenino"
                              control={<Radio />}
                              label="Femenino"
                            />
                            <FormControlLabel
                              value="ninguno"
                              control={<Radio />}
                              label="Ninguno"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Box>

                      <Box p={2}>
                        <TextField
                          id="email"
                          name="email"
                          type='email'
                          label="Correo Electrónico"
                          fullWidth
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Box>

                      <Box p={2}>
                        <TextField
                          id="phone"
                          name="phone"
                          label="Número de Teléfono"
                          fullWidth
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Box>

                    <Box display="flex" justifyContent="center" pt={2}>
                         {
                            showAlert && (
                                <Typography sx={{color: "red"}}>
                                    <strong>Te ha faltado campos por llenar</strong>
                                </Typography>
                            )
                        }
                    </Box>
                      <Box display="flex" justifyContent="center" p={2}>
                        <Box p={2}>
                            <Button 
                            autoFocus 
                            onClick={() => acceptReserve({ room: choiceRoom, reservation: formData })} 
                            variant="contained">
                            Aceptar reserva
                            </Button>
                        </Box>
                        <Box p={2}>
                            <Button 
                            variant="outlined" 
                            onClick={() => setReserveRoom(null)}>
                            Cancelar Reserva
                            </Button>
                        </Box>
                      </Box>
                    </Box>
                  )}

                  {!reserveRoom && (
                    <Button
                      variant="contained"
                      onClick={() => setReserveRoom(choiceRoom)}
                    >
                      Reservar
                    </Button>
                  )}
                </Box>
              </CardBox>
            )}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button
          autoFocus
          onClick={onCloseDialg}
          variant="contained"
        >
          Cerrar
        </Button>
      </DialogActions>
    </Box>
  );
}