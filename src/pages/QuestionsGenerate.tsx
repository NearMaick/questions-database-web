import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function QuestionsGenerate() {
  const [listQuestions, setListQuestions] = useState<any[]>([]);

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

  return (
    <div className='text-gray-100 w-full'>
      <div className='grid grid-cols-2 gap-2 bg-gray-800'>
        <h1>Imprimir a lista</h1>
        <pre>{JSON.stringify(listQuestions, null, 2)}</pre>
      </div>
    </div>
  );
}

