import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InputAdornment from '@mui/material/InputAdornment';

import {
  Box,
  FormControl,
  Select,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel
} from '@mui/material';

import { roomsTypes } from '../../../../../main/Utils/Lists/roomsTypes';

export default function EditRoom({ data, editData, onCloseEdit, listHotels }) {

  const [values, setValues] = useState({
    id: '',
    name: '',
    cost: '',
    taxes: '',
    type: '',
    location: '',
    status: true
  });


  useEffect(() => {
    if (!data) return;
    setValues({
      id: data.id,
      name: data.name ?? '',
      cost: data.cost ?? '',
      taxes: data.taxes ?? '',
      type: data.type ?? '',
      location: data.location ?? '',
      hotelId: data.hotelId ?? '',
      status: Boolean(data.status)
    });
  }, [data]);

  const handleValuesChange = (e) => {
  const { name, value } = e.target;

  setValues(prev => ({
    ...prev,
    [name]: value
  }));
  };

  const getNameHotel = (id) => {
      const hotel = listHotels.find(hotel => hotel.id === id);
      return hotel ? hotel.name : 'Unknown Hotel';
  };


  return (
    <Box>
      <DialogTitle sx={{ m: 0, p: 2, fontSize: '1.5rem' }}>
        Editar Habitación
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onCloseEdit}
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
          <Box mt={2} display="flex" justifyContent="center">
            <Typography sx={{ color: 'gray' }} textAlign={"center"}>
              Editar la información de la habitación
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="center" pb={2}>
            <Typography >
              Esta habitación pertenece al hotel: <strong>{getNameHotel(values.hotelId)}</strong>
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
                  <FormLabel id="status-select-label">
                    Estado
                  </FormLabel>
                  <RadioGroup row aria-labelledby="status-select-label" name="radio-status">
                    <FormControlLabel 
                      control={<Radio checked={values.status === true} onChange={() => setValues(prev => ({...prev, status: true}))} />}
                      label="Activo"
                    />
                    <FormControlLabel
                      control={<Radio checked={values.status === false} onChange={() => setValues(prev => ({...prev, status: false}))} />}
                      label="Inactivo"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>

            </FormControl>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={() => editData(values)} variant="contained">
          Editar
        </Button>
      </DialogActions>
    </Box>
  );
}