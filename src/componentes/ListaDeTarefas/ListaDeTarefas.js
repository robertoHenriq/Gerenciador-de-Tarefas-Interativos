import Tarefa from "../Tarefa/Tarefa";

const ListaDeTarefas = ({ tarefas, titulo }) => {

  return (
    
    tarefas.length > 0 ? (
      <section>
        <h3>Lista de Tarefas</h3> 
        <div className='colaboradores'>
          {tarefas.map(tarefa => (
            <Tarefa 
              key={tarefa.titulo}
              titulo={tarefa.titulo}
              prioridade={tarefa.prioridade}
              descricao={tarefa.descricao}
              time={tarefa.time}
              responsavel={tarefa.responsavel}
              limite={tarefa.limite}
            />
          ))}
        </div>
      </section>
    ) : ''
  );
};

export default ListaDeTarefas;
