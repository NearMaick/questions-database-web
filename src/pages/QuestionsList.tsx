import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { api } from "../utils/api";

let debounceTimer: NodeJS.Timeout;

interface IQuestionsProps {
  id: string;
  educator_id: string;
  typeQuestion: string;
  subject: string;
  description: string;
  answer: string[];
  correct: string;
}

interface IListQuestions {
  essay_questions: string[];
  multiple_choice_questions: string[];
}

export function QuestionsList() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [essayQuestions, setEssayQuestions] = useState<IQuestionsProps[]>([]);
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState<
    IQuestionsProps[]
  >([]);

  const { register, watch, reset, handleSubmit } = useForm();

  function handleListQuantityEssayQuestions(
    event: ChangeEvent<HTMLSelectElement>
  ) {
    setIsSubscribed(true);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      let response;

      if (event.target.value === "0") {
        response = await api.get(`/questions/list-by-type-question/ESSAY`);
      } else {
        response = await api.get(
          `/questions/list-by-type-question/ESSAY?quantity=${event.target.value}`
        );
      }
      setEssayQuestions(response.data);
    }, 1000);
  }

  function handleListQuantityMultipleChoiceQuestions(
    event: ChangeEvent<HTMLSelectElement>
  ) {
    setIsSubscribed(true);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      let response;

      if (event.target.value === "0") {
        response = await api.get(
          `/questions/list-by-type-question/MULTIPLE_CHOICE`
        );
      } else {
        response = await api.get(
          `/questions/list-by-type-question/MULTIPLE_CHOICE?quantity=${event.target.value}`
        );
      }
      setMultipleChoiceQuestions(response.data);
    }, 1000);
  }

  useEffect(() => {
    return () => setIsSubscribed(false);
  }, [isSubscribed]);

  function handleCreateListQuestions({
    essay_questions,
    multiple_choice_questions,
  }: IListQuestions) {
    const questions = essay_questions.concat(multiple_choice_questions);

    const updateQuestionsToArray = questions;
    const itemsJSON = JSON.stringify({ questions: updateQuestionsToArray });

    localStorage.setItem("@QuestionsDatabase-1.0.0:questions-list", itemsJSON);
  }

  return (
    <div className='text-gray-100 w-full'>
      <h1>Lista de questões</h1>

      <form
        onSubmit={handleSubmit(handleCreateListQuestions as any)}
        className='grid grid-cols-2 gap-2 bg-gray-800'>
        <div>
          <h2>Quantas questões dissertativas deseja listar?</h2>
          <select
            className='bg-gray-800 text-gray-200'
            name=''
            id=''
            onChange={(event) => handleListQuantityEssayQuestions(event)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
          </select>
          <br />
          {essayQuestions.map((question) => (
            <Fragment key={question.id}>
              <input
                type='checkbox'
                id={question.id}
                {...register("essay_questions")}
                value={question.id}
              />
              <label htmlFor={question.id}>{question.description}</label>
              <br />
            </Fragment>
          ))}
        </div>

        <div>
          <h2>Quantas questões dissertativas deseja listar?</h2>
          <select
            className='bg-gray-800 text-gray-200'
            name=''
            id=''
            onChange={(event) =>
              handleListQuantityMultipleChoiceQuestions(event)
            }>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
          </select>
          <br />
          {multipleChoiceQuestions.map((question) => (
            <Fragment key={question.id}>
              <input
                type='checkbox'
                id={question.id}
                {...register("multiple_choice_questions")}
                value={question.id}
              />
              <label htmlFor={question.id}>{question.description}</label>
              <br />
            </Fragment>
          ))}
        </div>
        <button type='submit'>enviar</button>
      </form>

      <div className='w-full bg-gray-800'>
        <Link to='/dashboard' className='w-full'>
          Voltar ao dashboard
        </Link>
      </div>
    </div>
  );
}

