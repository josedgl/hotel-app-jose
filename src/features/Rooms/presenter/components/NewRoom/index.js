import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {
  Box,
  FormControl,
  Select,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  InputAdornment
} from '@mui/material';

import { roomsTypes } from '../../../../../main/Utils/Lists/roomsTypes';

export default function NewRoom({ onCloseNew, additionalData, listHotels }) {

  const [values, setValues] = useState({});
  const [saveDisabled, setSaveDisabled] = useState(true);
  
  useEffect(() => { 
    if(listHotels.length === 0){
      setSaveDisabled(true);
    }else{
      setSaveDisabled(false);
    }

  }, [listHotels]);

  const handleValuesChange = (e) => {
  const { name, value } = e.target;

  setValues(prev => ({
    ...prev,
    [name]: value
  }));
  };

  return (
    <Box>
      <DialogTitle sx={{ m: 0, p: 2, fontSize: '1.5rem' }}>
        Crear Habitación
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onCloseNew}
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
          <Box mt={2} display="flex">
            <Typography sx={{ color: 'gray' }}>
              Ingresa la información de la nueva habitación
            </Typography>
          </Box>

          <Box mt={2}>
            <FormControl fullWidth>
              <Box mb={2}>
                <TextField
                  name='name'
                  id="name-room"
                  label="Nombre "
                  variant="outlined"
                  fullWidth
                  value={values.name}
                  onChange={handleValuesChange}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='cost'
                  id="cost-room"
                  label="Costos"
                  variant="outlined"
                  fullWidth
                  type='number'
                  value={values.cost}
                  onChange={handleValuesChange}
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    },
                  }}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  name='taxes'
                  id="taxes-room"
                  label="Impuestos"
                  variant="outlined"
                  type='number'
                  fullWidth
                  value={values.taxes}
                  onChange={handleValuesChange}
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    },
                  }}
                />
              </Box>
              <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="type-select-label">
                    Tipo
                  </InputLabel>

                  <Select
                    name='type'
                    labelId="type-select-label"
                    id="type-select"
                    value={values.type}
                    label="Tipo"
                    onChange={handleValuesChange}
                  >
                    {roomsTypes.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </Select>

                </FormControl>
              </Box>
              <Box mb={2}>
                <TextField
                  name='location'
                  id="location-room"
                  label="Ubicación"
                  variant="outlined"
                  fullWidth
                  value={values.location}
                  onChange={handleValuesChange}
                />
              </Box>

              <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="type-select-label">
                    Hotel al que pertenece
                  </InputLabel>

                  <Select
                    name='hotelId'
                    labelId="hotelId-select-label"
                    id="hotelId-select"
                    value={values.hotelId}
                    label="Hotel al que pertenece"
                    onChange={handleValuesChange}
                  >
                    {listHotels.map((hotel) => (
                      <MenuItem key={hotel.id} value={hotel.id}>
                        {hotel.name}
                      </MenuItem>
                    ))}
                  </Select>

                </FormControl>
              </Box>

            </FormControl>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        {
          saveDisabled && (
            <Typography color='error' variant='body2' sx={{ mr: 2, fontStyle: 'italic', fontSize: '12px', color: 'red' }}>
              No se pueden crear habitaciones sin hoteles disponibles. Por favor, crea un hotel primero.
            </Typography>
          )
        }
        <Button autoFocus onClick={() => additionalData(values)} variant="contained" disabled={saveDisabled}>
          Guardar
        </Button>
      </DialogActions>
    </Box>
  );
}