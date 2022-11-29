import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./hooks";
import { router } from "./router";

export function App() {
  return (
    <div className='dark h-[160vh] bg-gray-800'>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
}

