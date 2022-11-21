import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";

export function Questions() {
  const { register, watch, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const watchTypeQuestion = watch("type_question", false);

  async function handleCreateQuestion({
    type_question,
    subject,
    description,
    essay_answer,
    choice_01,
    choice_02,
    choice_03,
    choice_04,
    choice_05,
    correct,
  }: any) {
    await api.post("/questions/create", {
      type_question,
      subject,
      description,
      essay_answer,
      choice_01,
      choice_02,
      choice_03,
      choice_04,
      choice_05,
      correct,
    });
    reset();
    navigate("/success");
  }

  return (
    <div className='my-2 mx-auto p-2 border dark:border-white border-black rounded-md w-[768px] max-w-[768px]'>
      <div className='p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-[110-vh]'>
        <h1 className='text-2xl text-center py-2'>
          Educador, aqui você pode cadastrar suas questões
        </h1>
        <form onSubmit={handleSubmit(handleCreateQuestion)}>
          <div className='flex justify-between mb-2'>
            <label className='inline-block text-xl p-2' htmlFor='type_question'>
              Selecione o tipo de questão:
            </label>
            <select
              className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
              {...register("type_question")}>
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
              type='text'
              {...register("subject")}
              required
            />
          </div>
          <label className='block p-2 text-xl' htmlFor='description'>
            Escreva o enunciado da questão...
          </label>
          <textarea
            className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 resize-none rounded-md p-2 m-2'
            rows={5}
            cols={72}
            maxLength={200}
            {...register("description")}
            required
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
                {...register("essay_answer")}
                required
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
                <label className='inline-block text-xl p-2' htmlFor='choice_01'>
                  Alternativa 01
                </label>
                <input
                  className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                  {...register("choice_01")}
                  type='text'
                  required
                />
              </div>

              <div className='flex justify-between mb-2'>
                <label className='inline-block text-xl p-2' htmlFor='choice_02'>
                  Alternativa 02
                </label>
                <input
                  className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                  {...register("choice_02")}
                  type='text'
                  required
                />
              </div>

              <div className='flex justify-between mb-2'>
                <label className='inline-block text-xl p-2' htmlFor='choice_03'>
                  Alternativa 03
                </label>
                <input
                  className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                  {...register("choice_03")}
                  type='text'
                  required
                />
              </div>

              <div className='flex justify-between mb-2'>
                <label className='inline-block text-xl p-2' htmlFor='choice_04'>
                  Alternativa 04
                </label>
                <input
                  className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                  {...register("choice_04")}
                  type='text'
                  required
                />
              </div>

              <div className='flex justify-between mb-2'>
                <label className='inline-block text-xl p-2' htmlFor='choice_05'>
                  Alternativa 05
                </label>
                <input
                  className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                  {...register("choice_05")}
                  type='text'
                  required
                />
              </div>

              <div className='flex justify-between mb-2'>
                <label className='inline-block text-xl p-2' htmlFor='correct'>
                  Resposta Correta
                </label>
                <input
                  className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md p-2'
                  {...register("correct")}
                  type='text'
                  required
                />
              </div>

              <div className='w-full flex justify-center'>
                <button
                  type='submit'
                  className='my-4 py-4 px-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-lg dark:hover:bg-gray-600 transition'>
                  Enviar
                </button>
              </div>
            </>
          ) : null}
        </form>
      </div>
    </div>
  );
}

