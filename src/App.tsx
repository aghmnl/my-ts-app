import { Button } from "@mui/material";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-800 antialiased justify-center items-center ">
      <div className="flex-col text-white text-center">
        <div className="p-4 text-4xl">¡Bienvenido Agus!</div>
        <Button variant="contained" color="emerald" className="px-32">
          Hola Agus
        </Button>
      </div>
    </div>
  );
}

export default App;
