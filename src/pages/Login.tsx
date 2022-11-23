export function Login() {
  return (
    <div className='mx-auto flex items-center w-[768px] max-w-[768px] h-[80vh] '>
      <div className='px-2 my-4 mx-auto flex flex-col items-center justify-center bg-gray-200 border dark:bg-gray-800 text-gray-800 dark:text-gray-200 dark:border-white border-black h-[60%] w-[60%] rounded-md'>
        <label className='inline-block p-2' htmlFor='subject'>
          E-mail
        </label>
        <input
          className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2 mb-2 w-3/5 h-6'
          type='text'
          required
        />
        <label className='inline-block p-2' htmlFor='subject'>
          Senha
        </label>
        <input
          className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2 w-3/5 h-6'
          type='text'
          required
        />
      </div>
    </div>
  );
}

