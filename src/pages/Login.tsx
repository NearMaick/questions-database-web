import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Container } from "../components/styles/Container";
import { useAuth } from "../hooks/useAuth";

interface FormValues {
  email: string;
  password: string;
}

export function Login() {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<FormValues>();
  async function handleAuthenticate({ email, password }: FormValues) {
    signIn({ email, password });
    return <Redirect to='/dashboard' />;
  }

  return (
    <form onSubmit={handleSubmit(handleAuthenticate)}>
      <Container>
        <label className='inline-block p-2 w-full px-24' htmlFor='email'>
          E-mail
        </label>
        <input
          className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md py-4 px-2 mb-2 w-3/5 h-6'
          type='email'
          placeholder='seu@email.aqui'
          {...register("email")}
          required
        />
        <label className='inline-block p-2 w-full px-24' htmlFor='password'>
          Senha
        </label>
        <input
          className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md py-4 px-2 w-3/5 h-6'
          type='password'
          placeholder='suaSenhaAqui'
          {...register("password")}
          required
        />

        <div className='w-full flex justify-center'>
          <button
            type='submit'
            className='my-6 py-2 px-14 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-lg dark:hover:bg-gray-600 transition'>
            Enviar
          </button>
        </div>
      </Container>
    </form>
  );
}

