import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function App() {
  return (
    <div className='dark h-[110vh] bg-gray-800'>
      <header className='w-full text-center p-4 font-bold text-5xl text-gray-800 dark:text-gray-200'>
        CABEÇALHO
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

