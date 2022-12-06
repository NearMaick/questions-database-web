import { Link } from "react-router-dom";
import { Container } from "../components/styles/Container";
import { useAuth } from "../hooks/useAuth";

export function Dashboard() {
  const { signOut } = useAuth();

  return (
    <Container>
      <div className='p-2 m-4 leading-relaxed'>
        <h1>
          Olá Educador(a) <strong>Maick Souza</strong>!
          <br />O que deseja fazer?
        </h1>
      </div>
      <div className='pb-2 leading-relaxed flex flex-col'>
        <Link to='/questions/create'>Criar uma questão:</Link>
        <Link to='/questions/list'>Listar questões:</Link>
        <Link to=''>Editar uma de suas questões:</Link>
        <button onClick={signOut}>Sair</button>
      </div>
    </Container>
  );
}

