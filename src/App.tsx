import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function App() {
  return (
    <div className='dark'>
      <RouterProvider router={router} />
    </div>
  );
}

