import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00BFFF", // Sky blue
    },
    secondary: {
      main: "#FFD700", // Gold
    },
    error: {
      main: "#B22222", // Firebrick red
    },
    warning: {
      main: "#FF8C00", // Dark orange
    },
    info: {
      main: "#00BFFF", // Sky blue
    },
    success: {
      main: "#32CD32", // Lime green
    },
  },
  typography: {
    fontFamily: '"Futura", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
