import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";

let debounceTimer: NodeJS.Timeout;

export function QuestionsList() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [essayQuestions, setEssayQuestions] = useState([]);
  const [multipleChoiceQuestions, setMultipleChoiceQuestions] = useState([]);

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

  return (
    <div className='text-gray-100'>
      <h1>Lista de questões</h1>
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
      <pre>{JSON.stringify(essayQuestions, null, 2)}</pre>

      <h2>Quantas questões dissertativas deseja listar?</h2>
      <select
        className='bg-gray-800 text-gray-200'
        name=''
        id=''
        onChange={(event) => handleListQuantityMultipleChoiceQuestions(event)}>
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
      <pre>{JSON.stringify(multipleChoiceQuestions, null, 2)}</pre>
      <Link to='/dashboard'>Voltar ao dashboard</Link>
    </div>
  );
}

