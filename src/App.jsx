import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import Header from './components/header';
import Wall from './pages/wall';
import AppProvider from './context/AppProvider';

const myTheme = createTheme({
  palette: { mode: 'dark' },
});

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={myTheme}>
        <Header />
        <Wall />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
