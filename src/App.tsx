import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./hooks";
import { Routes } from "./router";

export function App() {
  return (
    <div className='dark grid h-screen place-items-center bg-gray-800'>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

