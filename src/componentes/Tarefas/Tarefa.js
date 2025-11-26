import './Tarefa.css';

const Tarefa = ({ titulo, descricao, prioridade,time, colaborador, data }) => {

  return (

    <main className="tarefa">

    <div className="titulo">
      <h2>Titulo</h2> 
      <div className="Prioridade">
      <p>Média</p>
      </div>
    </div>
    

    <div className="descricao">
      <p>descrição</p>
    </div>


    <div className="dadosTarefa">
      <p>Front-End</p>
      <p>José Roberto</p>
      <p>10/01/2026</p>
    </div>


  </main>
    
  );
} 

export default Tarefa;