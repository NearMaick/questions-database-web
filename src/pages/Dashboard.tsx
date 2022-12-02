import { Link } from "react-router-dom";
import { Container } from "../components/styles/Container";

export function Dashboard() {
  return (
    <Container>
      <div className='p-2 m-4 leading-relaxed'>
        <h1>
          Olá Educador(a) <strong>Maick Souza</strong>!
          <br />O que deseja fazer?
        </h1>
      </div>
      <div className='pb-2 leading-relaxed flex flex-col'>
        <Link to='/dashboard/questions/create'>Criar uma questão:</Link>
        <Link to='/dashboard/questions/list'>Listar questões:</Link>
        <Link to=''>Editar uma de suas questões:</Link>
      </div>
    </Container>
  );
}

