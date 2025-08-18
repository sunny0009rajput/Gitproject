import { createTheme } from "@mui/material/styles";

// create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // default blue
    },
    secondary: {
      main: "#d32f2f", // red
    },
    background: {
      default: "#ffffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
