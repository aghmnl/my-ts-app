import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="indigo">
          {/* other options are success, warning, info, primary, secondary, error, indigo and emerald */}
          Hola
        </Button>
      </header>
    </div>
  );
}

export default App;
