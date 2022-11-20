import { useForm } from "react-hook-form";

export function Questions() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const watchTypeQuestion = watch("type-question", false);

  return (
    <div className='my-2 mx-auto p-2 border dark:border-white border-black rounded-md w-[768px] max-w-[768px]'>
      <div className='p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-[110-vh]'>
        <h1 className='text-2xl text-center py-2'>
          Educador, aqui você pode cadastrar suas questões
        </h1>
        <div className='flex justify-between mb-2'>
          <label className='inline-block text-xl p-2' htmlFor='type-question'>
            Selecione o tipo de questão:
          </label>
          <select
            className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
            {...register("type-question")}>
            <option value='none'>Tipo</option>
            <option value='ESSAY'>Dissertativa</option>
            <option value='MULTIPLE_CHOICE'>Múltipla-escolha</option>
          </select>
        </div>
        <div className='flex justify-between'>
          <label className='inline-block p-2 text-xl' htmlFor='subject'>
            Para qual matéria é essa questão?
          </label>
          <input
            className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
            name='subject'
            type='text'
          />
        </div>
        <label className='block p-2 text-xl' htmlFor='question'>
          Escreva o enunciado da questão...
        </label>
        <textarea
          className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 resize-none rounded-md p-2 m-2'
          rows={5}
          cols={72}
          maxLength={200}
          name='question'
        />

        {watchTypeQuestion === "none" ? (
          <h1>
            Para finalizar o cadastro da questão, precisa selecionar o tipo...
          </h1>
        ) : null}
        {watchTypeQuestion === "ESSAY" ? (
          <>
            <h1 className='text-xl pb-2 pl-2'>Resposta</h1>
            <textarea
              className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 resize-none rounded-md p-2 m-2'
              rows={5}
              cols={72}
              maxLength={180}
              name='question'
            />
            <div className='w-full flex justify-center'>
              <button className='my-4 py-4 px-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-lg dark:hover:bg-gray-600 transition'>
                Enviar
              </button>
            </div>
          </>
        ) : null}
        {watchTypeQuestion === "MULTIPLE_CHOICE" ? (
          <>
            <div className='flex justify-between mb-2'>
              <label className='inline-block text-xl p-2' htmlFor='choice-01'>
                Alternativa 01
              </label>
              <input
                className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                name='choice-01'
                type='text'
              />
            </div>

            <div className='flex justify-between mb-2'>
              <label className='inline-block text-xl p-2' htmlFor='choice-02'>
                Alternativa 02
              </label>
              <input
                className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                name='choice-02'
                type='text'
              />
            </div>

            <div className='flex justify-between mb-2'>
              <label className='inline-block text-xl p-2' htmlFor='choice-03'>
                Alternativa 03
              </label>
              <input
                className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                name='choice-03'
                type='text'
              />
            </div>

            <div className='flex justify-between mb-2'>
              <label className='inline-block text-xl p-2' htmlFor='choice-04'>
                Alternativa 04
              </label>
              <input
                className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                name='choice-04'
                type='text'
              />
            </div>

            <div className='flex justify-between mb-2'>
              <label className='inline-block text-xl p-2' htmlFor='choice-05'>
                Alternativa 05
              </label>
              <input
                className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                name='choice-05'
                type='text'
              />
            </div>

            <div className='flex justify-between mb-2'>
              <label className='inline-block text-xl p-2' htmlFor='answer'>
                Resposta Correta
              </label>
              <input
                className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                name='answer'
                type='text'
              />
            </div>

            <div className='w-full flex justify-center'>
              <button className='my-4 py-4 px-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-lg dark:hover:bg-gray-600 transition'>
                Enviar
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

