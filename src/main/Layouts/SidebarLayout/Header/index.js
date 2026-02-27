import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useLocation } from 'react-router-dom';

export default function ButtonAppBar({ toggleSidebar }) {

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const clickIconMenu =()=>{
    toggleSidebar();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#006df1"}}>
        <Toolbar>
          <IconButton
            onClick={clickIconMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, pl: 4 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Hotel - UltraGroup
          </Typography>
          {isAdminRoute && (
            <Button color="inherit" onClick={() => window.history.back()}>
              <ArrowBackOutlinedIcon />
              Regresar
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
