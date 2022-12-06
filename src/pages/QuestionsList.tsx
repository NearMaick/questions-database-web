import { Link } from "react-router-dom";
import { useLoadQuestionsByType } from "../hooks/useQuestions";
import { useLoadQuestionsBySubject } from "../hooks/useQuestionsBySubject";

export function QuestionsList() {
  const essayQuestions = useLoadQuestionsByType("ESSAY");
  const multipleChoiceQuestions = useLoadQuestionsByType("MULTIPLE_CHOICE");
  const questionsBySubject = useLoadQuestionsBySubject("português");

  return (
    <div className='text-gray-100'>
      <h1>questions list</h1>
      {/* <pre>{JSON.stringify(essayQuestions.questions, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(multipleChoiceQuestions.questions, null, 2)}</pre> */}
      <pre>{JSON.stringify(questionsBySubject.questions, null, 2)}</pre>

      <Link to='/dashboard'>Voltar ao dashboard</Link>
    </div>
  );
}

