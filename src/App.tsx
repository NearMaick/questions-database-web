import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./hooks";
import { Routes } from "./router";

export function App() {
  return (
    <div className='dark h-full bg-gray-800'>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

