import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function useLoadQuestionsByType(
  type_question: "ESSAY" | "MULTIPLE_CHOICE",
  quantity: string | null = "0"
) {
  const [questions, setQuestions] = useState([]);

  async function fetchEssayQuestionsData() {
    let response;

    if (quantity === "0") {
      response = await api.get(
        `http://localhost:3333/questions/list-by-type-question/${type_question}`
      );
    } else {
      response = await api.get(
        `http://localhost:3333/questions/list-by-type-question/${type_question}?quantity=${quantity}`
      );
    }
    setQuestions(response.data);
  }

  useEffect(() => {
    fetchEssayQuestionsData();
  }, []);

  return { questions };
}

