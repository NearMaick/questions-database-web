export function Questions() {
  return (
    <div className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-screen'>
      <header>CABEÇALHO</header>
      <h1>Educador, aqui você pode cadastrar suas questões</h1>
      <label className='block' htmlFor='type-question'>
        Selecione o tipo de questão:
      </label>
      <select
        className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
        name='type-question'>
        <option value='none' selected>
          Tipo
        </option>
        <option value='ESSAY'>Dissertativa</option>
        <option value='MULTIPLE_CHOICE'>Múltipla-escolha</option>
      </select>
      <label className='block' htmlFor='subject'>
        Para qual matéria é essa questão?
      </label>
      <input
        className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
        name='subject'
        type='text'
      />
      <label className='block' htmlFor='question'>
        Escreva o enunciado da questão...
      </label>
      <textarea
        className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
        name='question'
      />
      <span className='block'>
        Para o dev: aqui precisa fazer uma lógica no front para colocar um campo
        caso seja dissertativa e várias se múltipla escolha
      </span>
    </div>
  );
}

