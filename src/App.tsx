import { Button } from "@mui/material";

function App() {
  return (
    <div className="flex min-h-screen text-center bg-slate-800 text-white justify-center items-center">
      <div className="flex-col">
        <div className="p-4 text-4xl">¡Bienvenido Agus!</div>
        <Button variant="contained" color="indigo" className="px-32">
          Hola Agus
        </Button>
      </div>
    </div>
  );
}

export default App;
