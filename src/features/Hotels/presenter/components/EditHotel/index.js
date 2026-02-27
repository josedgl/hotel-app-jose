import { useEffect, useState } from 'react';

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
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel
} from '@mui/material';

import { citiesList } from '../../../../../main/Utils/Lists/citiesList';

export default function NewHotel({ data, editData, onCloseEdit }) {

  useEffect(() => {
    if (!data) return;
    setName(data.name ?? '');
    setCity(data.city ?? '');
    setStatus(Boolean(data.status));
  }, [data]);

  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Box>
      <DialogTitle sx={{ m: 0, p: 2, fontSize: '1.5rem' }}>
        Editar Hotel
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
          <Box mt={2} display="flex">
            <Typography sx={{ color: 'gray' }}>
              Editar la información del hotel
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
              <Box mb={2}>
                <FormControl fullWidth>
                  <FormLabel id="status-select-label">
                    Estado
                  </FormLabel>
                  <RadioGroup row aria-labelledby="status-select-label" name="radio-status">
                    <FormControlLabel 
                      control={<Radio checked={status === true} onChange={() => setStatus(true)} />}
                      label="Activo"
                    />
                    <FormControlLabel
                      control={<Radio checked={status === false} onChange={() => setStatus(false)} />}
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
        <Button autoFocus onClick={() => editData({ name, city, status, id: data.id })} variant="contained">
          Editar
        </Button>
      </DialogActions>
    </Box>
  );
}