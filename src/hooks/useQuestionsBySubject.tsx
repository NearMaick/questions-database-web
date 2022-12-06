import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function useLoadQuestionsBySubject(subject: string) {
  const [questions, setQuestions] = useState([]);

  async function fetchEssayQuestionsData() {
    const response = await api.get(
      `http://localhost:3333/questions/list-by-subject/${subject}`
    );
    setQuestions(response.data);
  }

  useEffect(() => {
    fetchEssayQuestionsData();
  }, []);

  return { questions };
}

