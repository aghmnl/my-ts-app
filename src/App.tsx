import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="p-4 text-4xl">¡Bienvenido Agus!</div>
        <Button variant="contained" color="emerald" className="p-40">
          {/* other options are success, warning, info, primary, secondary, error, indigo and emerald */}
          Hola Agus
        </Button>
      </div>
    </div>
  );
}

export default App;
