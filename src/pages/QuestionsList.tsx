import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";

let debounceTimer: NodeJS.Timeout;

export function QuestionsList() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [essayQuestions, setEssayQuestions] = useState([]);
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);

  function handleListQuantityEssayQuestions(
    event: ChangeEvent<HTMLInputElement>
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
    event: ChangeEvent<HTMLInputElement>
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

  return (
    <div className='text-gray-100'>
      <h1>Lista de questões</h1>
      <h2>Quantas questões dissertativas deseja listar?</h2>
      <input
        className='bg-gray-800 text-gray-200'
        type='number'
        onChange={(event) => handleListQuantityEssayQuestions(event)}
        id=''
      />
      <pre>{JSON.stringify(essayQuestions, null, 2)}</pre>

      <h2>Quantas questões dissertativas deseja listar?</h2>
      <input
        className='bg-gray-800 text-gray-200'
        type='number'
        onChange={(event) => handleListQuantityMultipleChoiceQuestions(event)}
        id=''
      />
      <pre>{JSON.stringify(multipleChoiceQuestions, null, 2)}</pre>
      <Link to='/dashboard'>Voltar ao dashboard</Link>
    </div>
  );
}

