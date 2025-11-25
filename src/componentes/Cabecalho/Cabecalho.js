import './Cabecalho.css';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1>Gerenciador de Tarefas</h1>
      <p>Organize as tarefas  de sua equipe de forma eficiente</p>

      <button className='botaoNovaTarefa'>+ Nova Tarefa</button>
    </header>
  );
}

export default Cabecalho;