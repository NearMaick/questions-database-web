import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

export function Container({ children }: IContainerProps) {
  return (
    <div className='mx-auto flex items-center h-screen'>
      <div className='p-6 my-4 mx-auto flex flex-col items-center justify-center bg-gray-200 border dark:bg-gray-800 text-gray-800 dark:text-gray-200 dark:border-white border-black rounded-md'>
        {children}
      </div>
    </div>
  );
}

