import { ThemeProvider, createTheme } from '@mui/material/styles';

import GlobalStyles from './styles/GlobalStyles';
import AppProvider from './context/AppProvider';
import Router from './router/routes';

const myTheme = createTheme({
  palette: { mode: 'dark' },
});

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
