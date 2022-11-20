import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function App() {
  return (
    <div className='dark h-[110vh] bg-gray-800'>
      <RouterProvider router={router} />
    </div>
  );
}

