import { Link } from "react-router-dom";
import { Container } from "../components/styles/Container";
import { useQuestions } from "../hooks/useQuestions";

export function QuestionsList() {
  const essayQuestions = useQuestions("ESSAY");
  const multipleChoiceQuestions = useQuestions("MULTIPLE_CHOICE");

  return (
    <Container>
      <h1>questions list</h1>
      <pre>{JSON.stringify(essayQuestions.questions, null, 2)}</pre>
      <pre>{JSON.stringify(multipleChoiceQuestions.questions, null, 2)}</pre>

      <Link to='/dashboard'>Voltar ao dashboard</Link>
    </Container>
  );
}

