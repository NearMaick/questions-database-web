import { Fragment, useEffect, useState } from "react";
import { api } from "../utils/api";

interface IQuestionsProps {
  id: string;
  description: string;
  answer: string[];
}

export function QuestionsGenerate() {
  const [listQuestions, setListQuestions] = useState<IQuestionsProps[]>([]);

  async function loadListedQuestionsData() {
    const storedItemsAsJSON = localStorage.getItem(
      "@QuestionsDatabase-1.0.0:questions-list"
    );
    const { questions } = JSON.parse(storedItemsAsJSON!);

    const questionsListResult = questions.map((question: any) => {
      return api.get(`/questions/list-by-id/${question}`);
    });

    Promise.all(questionsListResult).then((results) => {
      const listQuestionsFetched = results.map((result) => {
        return result.data;
      });
      setListQuestions(listQuestionsFetched);
    });
  }

  useEffect(() => {
    loadListedQuestionsData();
  }, []);

  function handleSaveListQuestion() {
    const storedItemsAsJSON = localStorage.getItem(
      "@QuestionsDatabase-1.0.0:questions-list"
    );
    const { questions } = JSON.parse(storedItemsAsJSON!);

    console.log(questions);

    window.print();
  }

  return (
    <div className='text-gray-100 w-full'>
      <div className='bg-gray-800'>
        <button onClick={handleSaveListQuestion}>Imprimir a lista</button>
        {listQuestions.map((question) => (
          <Fragment key={question.id}>
            {question.answer.length === 1 ? (
              <>
                <li>{question.description}</li>
                <p>_____________________________________________________</p>
              </>
            ) : (
              <>
                <p>{question.description}</p>
                {question.answer.map((answer) => (
                  <Fragment key={answer}>
                    <input type='checkbox' disabled />
                    <label>{answer}</label>
                    <br />
                  </Fragment>
                ))}
              </>
            )}
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

