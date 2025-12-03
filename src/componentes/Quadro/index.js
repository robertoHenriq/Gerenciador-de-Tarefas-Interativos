import styled from "styled-components";
import Tarefa from "../Tarefa/Tarefa";

const QuadroTarefas = styled.div`

`

const Quadros = ({ tarefas, titulo }) =>{

    return(
        tarefas.length > 0 ? (
      <section>
        <h3>Lista de Tarefas</h3> 
        <QuadroTarefas>
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
        </QuadroTarefas>
      </section>
    ) : ''
    )
}
export default Quadros