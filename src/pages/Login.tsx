import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface FormValues {
  email: string;
  password: string;
}

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { register, watch, reset, handleSubmit } = useForm<FormValues>();
  async function handleAuthenticate({ email, password }: FormValues) {
    signIn({ email, password });
    navigate("/questions");
  }

  return (
    <form onSubmit={handleSubmit(handleAuthenticate)}>
      <div className='mx-auto flex items-center w-[768px] max-w-[768px] h-[80vh] '>
        <div className='px-2 my-4 mx-auto flex flex-col items-center justify-center bg-gray-200 border dark:bg-gray-800 text-gray-800 dark:text-gray-200 dark:border-white border-black h-[60%] w-[60%] rounded-md'>
          <label className='inline-block p-2' htmlFor='email'>
            E-mail
          </label>
          <input
            className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2 mb-2 w-3/5 h-6'
            type='email'
            {...register("email")}
            required
          />
          <label className='inline-block p-2' htmlFor='password'>
            Senha
          </label>
          <input
            className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2 w-3/5 h-6'
            type='password'
            {...register("password")}
            required
          />

          <div className='w-full flex justify-center'>
            <button
              type='submit'
              className='my-4 py-4 px-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-lg dark:hover:bg-gray-600 transition'>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

