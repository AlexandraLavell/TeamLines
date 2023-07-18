import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { Typography } from "@mui/material";
import Game from "@/components/Game";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <div>
          <Typography >Hello</Typography>
        </div>
        <Game/>
      </main>
    </ThemeProvider>
  );
}
