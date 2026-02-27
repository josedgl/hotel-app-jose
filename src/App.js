import Router from './main/Routes'
import ThemeProvider from './main/theme/ThemeProvider';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider>
        <CssBaseline />
        <Router/>
    </ThemeProvider>
  );
}

export default App;
