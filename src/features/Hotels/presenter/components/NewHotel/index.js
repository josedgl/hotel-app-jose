import { useState } from 'react';

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
  MenuItem
} from '@mui/material';

import { citiesList } from '../../../../../main/Utils/Lists/citiesList';

export default function NewHotel({ onCloseNew, additionalData }) {

  const [city, setCity] = useState('');
  const [name, setName] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Box>
      <DialogTitle sx={{ m: 0, p: 2, fontSize: '1.5rem' }}>
        Crear Hotel
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
              Ingresa la información del nuevo hotel
            </Typography>
          </Box>

          <Box mt={2}>
            <FormControl fullWidth>
              <Box mb={2}>
                <TextField
                  id="name-hotel"
                  label="Nombre del Hotel"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={handleNameChange}
                />
              </Box>
              <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel id="city-select-label">
                    Ciudad
                  </InputLabel>

                  <Select
                    labelId="city-select-label"
                    id="city-select"
                    value={city}
                    label="Ciudad"
                    onChange={handleCityChange}
                  >
                    {citiesList.map((city) => (
                      <MenuItem key={city.id} value={city.id}>
                        {city.name}
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
        <Button autoFocus onClick={() => additionalData({ name, city })} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Box>
  );
}