import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function useQuestions(type_question: "ESSAY" | "MULTIPLE_CHOICE") {
  const [questions, setQuestions] = useState([]);

  async function fetchEssayQuestionsData() {
    const response = await api.get(
      `http://localhost:3333/questions/list-by-type-question/${type_question}`
    );
    setQuestions(response.data);
  }

  useEffect(() => {
    fetchEssayQuestionsData();
  }, []);

  return { questions };
}

