import React from 'react';
import FeeSchedulePage from './component/FeeSchedulePage';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';





function App() {
  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
  

  return (
    <>
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <FeeSchedulePage />
    </ThemeProvider>
    
      
    </>
  )
}

export default App
